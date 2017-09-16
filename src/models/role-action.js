import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Action from './action';
import Role from './role';

const RoleAction = sequelize.define('role_action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

Role.belongsToMany(Action, { through: 'RoleAction' });
Action.belongsToMany(Role, { through: 'UserRole' });

export default RoleAction;
