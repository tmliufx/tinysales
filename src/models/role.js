import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '唯一编号'
    },
    name: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '名称'
    },
    desc: {
        type: Sequelize.STRING
    }
});

Role.belongsTo(Company);

export default Role;
