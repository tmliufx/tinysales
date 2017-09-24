import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import createError from 'http-errors';
import User from '../models/user';
import Company from '../models/company';
import logger from '../lib/logger';

const publicKey = fs.readFileSync(path.join(__dirname, '../../id_rsa.pub'));

/**
 * 检查授权是否合法
 */
export function CheckAuth(ctx) {
    const token = ctx.request.header.authorization;
    const decoded = jwt.verify(token.substr(7), publicKey);
    if (decoded.user) {
        ctx.body = decoded.user;
    } else {
        ctx.throw(createError.Unauthorized());
    }
}

export async function CheckUser(ctx) {
    const loginUser = {
        account: ctx.request.body.fields.account,
        password: ctx.request.body.fields.password
    };
    if (loginUser.account && loginUser.password) {
        // 用户登录的时候返回token
        const userInfo = await User.findOne({ where: loginUser, include: [{ model: Company }] });
        if (userInfo == null) {
            ctx.throw(createError.NotFound());
        } else {
            ctx.body = jwt.sign({
                user: {
                    id: userInfo.getDataValue('id'),
                    name: userInfo.getDataValue('name'),
                    password: userInfo.getDataValue('password'),
                    account: userInfo.getDataValue('account'),
                    phone: userInfo.getDataValue('phone'),
                    company: {
                        id: userInfo.company.getDataValue('id'),
                        name: userInfo.company.getDataValue('name'),
                        desc: userInfo.company.getDataValue('desc'),
                        contact: userInfo.company.getDataValue('contact'),
                        phone: userInfo.company.getDataValue('phone'),
                        address: userInfo.company.getDataValue('address')
                    }
                } // 你要保存到token的数据
            }, publicKey, { expiresIn: '7d' });
        }
    }
}

export const Post = ctx => {
    switch (ctx.params.action) {
    case 'check':
        return CheckAuth(ctx);
    case 'token':
        return CheckUser(ctx);
    default:
        return CheckAuth(ctx);
    }
};
