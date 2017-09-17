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
},
{
    underscored: true
});

Role.belongsToMany(Action, { through: 'role_action' });
Action.belongsToMany(Role, { through: 'role_action' });

export default RoleAction;
