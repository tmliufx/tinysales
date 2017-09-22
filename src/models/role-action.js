import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

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


export default RoleAction;
