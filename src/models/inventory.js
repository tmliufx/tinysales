import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Inventory = sequelize.define('inventory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    const: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    },
    count: {
        type: Sequelize.INTEGER
    }
});

export default Inventory;
