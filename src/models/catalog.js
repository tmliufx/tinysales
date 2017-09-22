import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Catalog = sequelize.define('catalog', {
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
        type: Sequelize.STRING,
        comment: '描述'
    }
},
{
    underscored: true
});

export default Catalog;
