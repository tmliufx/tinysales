import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Company = sequelize.define('company', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '唯一编号'
    },
    name: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '名称'
    },
    desc: {
        type: Sequelize.STRING(255),
        comment: '描述'
    },
    contact: {
        type: Sequelize.STRING(18),
        comment: '联系人'
    },
    phone: {
        type: Sequelize.STRING(18),
        comment: '电话'
    },
    address: {
        type: Sequelize.STRING(255),
        comment: '地址'
    }
},
{
    underscored: true
});

export default Company;
