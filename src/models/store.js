import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Store = sequelize.define('store', {
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
    }
});

export default Store;
