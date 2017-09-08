import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    account: {
        type: Sequelize.STRING,
        field: 'account'
    }
});

User.sync();

export default User;
