import KoaRouter from 'koa-router';
import controllers from '../controllers/index.js';

const router = new KoaRouter();

router
    .get('/public/get', (ctx, next) => {
        ctx.body = '禁止访问！';
    }) // 以/public开头则不用经过权限认证
    .post('/upload', controllers.upload.default)
    .get('/api/:name', controllers.api.Get)
    .post('/api/:name', controllers.api.Post)
    .put('/api/:name', controllers.api.Put)
    .del('/api/:name', controllers.api.Delect)
    .post('/auth/:action', controllers.auth.Post);

export default router;
