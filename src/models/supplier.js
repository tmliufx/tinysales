import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Supplier = sequelize.define('supplier', {
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
    },
    amount: {
        type: Sequelize.STRING,
        defaultValue: 0,
        comment: '往来金额'
    }
},
{
    underscored: true
});

export default Supplier;
