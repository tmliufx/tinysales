import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Action from './action';
import Role from './role';

const RoleAction = sequelize.define('role-action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

Role.belongsToMany(Action, { through: 'role-action' });
Action.belongsToMany(Role, { through: 'role-action' });

export default RoleAction;
