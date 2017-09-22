import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

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
        comment: '手机'
    }
},
{
    underscored: true
});

export default User;
