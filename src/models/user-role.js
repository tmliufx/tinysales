import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const UserRole = sequelize.define('userRole', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

export default UserRole;
