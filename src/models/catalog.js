import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Catalog = sequelize.define('catalog', {
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
    }
});

export default Catalog;
