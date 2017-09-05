export const Get = ctx => {
    ctx.body = {
        result: 'get',
        name: ctx.params.name,
        para: ctx.query
    };
}

export const Post = ctx => {
    ctx.body = {
        result: 'post',
        name: ctx.params.name,
        para: ctx.request.body
    };
}

export const Put = ctx => {
    ctx.body = {
        result: 'put',
        name: ctx.params.name,
        para: ctx.request.body
    };
}

export const Delect = ctx => {
    ctx.body = {
        result: 'delect',
        name: ctx.params.name,
        para: ctx.request.body
    };
}
