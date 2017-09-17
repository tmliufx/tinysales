import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';
import Merchandise from './merchandise';

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

console.log('Merchandise', Merchandise, 'Company', Company);

Catalog.belongsTo(Company);
// Catalog.hasMany(Merchandise);

export default Catalog;
