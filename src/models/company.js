import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Company = sequelize.define('company', {
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

export default Company;
