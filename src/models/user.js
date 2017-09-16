import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '名称'
    },
    password: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '名称'
    },
    account: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '登录账号'
    },
    phone: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '手机'
    }
});

User.belongsTo(Company);

User.create({
    name: '管理员',
    password: 'init1234$',
    account: 'admin'
});

export default User;
