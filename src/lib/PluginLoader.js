import fs from 'fs';
import path from 'path';
import compose from 'koa-compose';

function getDirs(srcpath) {
    return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

export default (srcpath, filename = 'index.js') => {
    const plugins = {};
    const dirs = getDirs(srcpath);
    const list = [];

    dirs.forEach(name => {
        let fn = require(path.join(srcpath, name, filename));

        if (typeof fn !== 'function' && typeof fn.default === 'function') {
            fn = fn.default;
        } else {
            throw (new Error('plugin must be a function!'));
        }

        plugins[name] = fn;

        list.push((ctx, next) => fn(ctx, next) || next());
    });

    return compose(list);
};
