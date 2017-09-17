import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';

const Store = sequelize.define('store', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '唯一编号'
    },
    name: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '名称'
    },
    desc: {
        type: Sequelize.STRING,
        comment: '描述'
    },
    address: {
        type: Sequelize.STRING,
        comment: '地址'
    }
},
{
    underscored: true
});

Store.belongsTo(Company);

export default Store;
