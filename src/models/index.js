import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

import Company from './company';
import User from './user';
import Role from './role';
import Action from './action';
import UserRole from './user-role';
import RoleAction from './role-action';
import Catalog from './catalog';
import Member from './member';
import BankAccount from './bank-account';
import Bill from './bill';
import BillItem from './bill-item';
import Merchandise from './merchandise';
import Stock from './stock';
import Store from './store';
import Supplier from './supplier';

User.belongsTo(Company);
User.belongsToMany(Role, { through: 'user_role' });
Role.belongsToMany(User, { through: 'user_role' });
Role.belongsTo(Company);
Role.belongsToMany(Action, { through: 'role_action' });
Action.belongsToMany(Role, { through: 'role_action' });

Bill.hasMany(BillItem);
Bill.belongsTo(Company);

BankAccount.belongsTo(Company);

BillItem.belongsTo(Bill);
BillItem.hasOne(Merchandise);

Catalog.belongsTo(Company);
Catalog.hasMany(Merchandise);

Merchandise.belongsTo(Company);
Merchandise.belongsTo(Catalog);

Stock.belongsTo(Company);
Stock.belongsTo(Store);
Stock.hasOne(Merchandise);

Store.belongsTo(Company);
Supplier.belongsTo(Company);

export function initDatabase() {
    sequelize.sync({ force: true }).then(() => {
        User.create({
            name: '管理员',
            password: 'init1234$',
            account: 'admin',
            company: {
                name: 'tinysales'
            }
        },
        {
            include: [Company]
        });
    });
}

export default () => {
    // 测试数据库链接
    sequelize.authenticate().then(() => {
        console.log('数据库连接成功');
    }).catch(err => {
        // 数据库连接失败时打印输出
        console.error(err);
        throw err;
    });
};
