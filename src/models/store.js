import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

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

export default Store;
