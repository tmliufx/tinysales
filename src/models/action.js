import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Action = sequelize.define('action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '操作名称'
    },
    desc: {
        type: Sequelize.STRING,
        comment: '操作描述'
    },
    path: {
        type: Sequelize.STRING,
        comment: '操作的连接地址'
    }
},
{
    underscored: true
});

export default Action;
