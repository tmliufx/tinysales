import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Action = sequelize.define('action', {
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
    path: {
        type: Sequelize.STRING
    }
});

export default Action;
