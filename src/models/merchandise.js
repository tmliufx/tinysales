import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Merchandise = sequelize.define('merchandise', {
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
    productCode: {
        type: Sequelize.STRING
    },
    providerCode: {
        type: Sequelize.STRING
    },
    photo: {
        type: Sequelize.STRING
    }
});

export default Merchandise;
