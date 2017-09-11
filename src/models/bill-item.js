import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const BillItem = sequelize.define('billItem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    count: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.STRING
    }
});

export default BillItem;
