import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Bill = sequelize.define('bill', {
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
    type: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.INTEGER
    },
    invalid: {
        type: Sequelize.BOOLEAN
    }
});

export default Bill;
