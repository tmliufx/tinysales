import Koa2 from 'koa';
import KoaBody from 'koa-body';
import KoaStatic from 'koa-static2';
import Config from 'config';
import path from 'path';
import jwt from 'koa-jwt';
import fs from 'fs';
import MainRoutes from './routes/main-routes';
import ErrorRoutes from './routes/error-routes';
import { initDatabase, initAssociate } from './models';
import logger from './lib/logger';

initAssociate();
// initDatabase();

const app = new Koa2();
// Current mode
const env = process.env.NODE_ENV || 'development';

const publicKey = fs.readFileSync(path.join(__dirname, '../id_rsa.pub'));

app
    .use((ctx, next) => {
        if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
            ctx.set('Access-Control-Allow-Origin', '*');
        } else {
            ctx.set('Access-Control-Allow-Origin', Config.get('http_server.host'));
        }
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        ctx.set('Access-Control-Allow-Credentials', true); // 允许带上 cookie
        return next();
    })
    .use(KoaStatic('assets', path.resolve(__dirname, '../assets'))) // Static resource
    .use(jwt({ secret: publicKey }).unless({ path: [/^\/public|\/auth|\/assets/] }))
    .use(KoaBody({
        multipart: true,
        strict: false,
        formidable: {
            uploadDir: path.join(__dirname, '../assets/uploads/tmp')
        },
        jsonLimit: '10mb',
        formLimit: '10mb',
        textLimit: '10mb'
    })) // Processing request
    .use(MainRoutes.routes())
    .use(MainRoutes.allowedMethods())
    .use(ErrorRoutes());

if (env === 'development') { // logger
    app.use((ctx, next) => {
        const start = new Date();
        return next().then(() => {
            const ms = new Date() - start;
            logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
        });
    });
}

app.listen(Config.get('api_server.port'));

logger.log(`Now start API server on port${Config.get('api_server.port')}...`);

export default app;
