import Koa2 from 'koa';
import KoaBody from 'koa-body';
import KoaStatic from 'koa-static2';
import Config from 'config';
import path from 'path';
import MainRoutes from './routes/main-routes';
import ErrorRoutesCatch from './middleware/ErrorRoutesCatch';
import ErrorRoutes from './routes/error-routes';
import sequelize from './lib/sequelize';

// import PluginLoader from './lib/PluginLoader';

sequelize.connection();

const app = new Koa2();
// Current mode
const env = process.env.NODE_ENV || 'development';

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
    .use(ErrorRoutesCatch())
    .use(KoaStatic('assets', path.resolve(__dirname, '../assets'))) // Static resource
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
    // .use(PluginLoader(SystemConfig.System_plugin_path))
    .use(MainRoutes.routes())
    .use(MainRoutes.allowedMethods())
    .use(ErrorRoutes());

if (env === 'development') { // logger
    app.use((ctx, next) => {
        const start = new Date();
        return next().then(() => {
            const ms = new Date() - start;
            console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        });
    });
}

app.listen(Config.get('api_server.port'));

console.log(`Now start API server on port${Config.get('api_server.port')}...`);

export default app;
