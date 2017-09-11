import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Supplier = sequelize.define('supplier', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.STRING
    }
});

export default Supplier;
