import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const RoleAction = sequelize.define('role-action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

export default RoleAction;
