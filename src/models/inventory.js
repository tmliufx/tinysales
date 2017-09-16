import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';
import Store from './store';
import Merchandise from './merchandise';

const Inventory = sequelize.define('inventory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '唯一编号'
    },
    const: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '成本'
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '售价'
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '数量'
    }
});

Inventory.belongsTo(Company);
Inventory.belongsTo(Store);
Inventory.hasOne(Merchandise);

export default Inventory;
