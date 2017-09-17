import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import User from './user';
import Role from './role';

const UserRole = sequelize.define('user-role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
{
    // 不要添加时间戳属性 (updatedAt, createdAt)
    timestamps: false,

    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true,

    // 禁止修改表名. 默认情况下
    // sequelize会自动使用传入的模型名（define的第一个参数）做为表名
    // 如果你不想使用这种方式你需要进行以下设置
    freezeTableName: true
});

User.belongsToMany(Role, { through: 'user-role' });
Role.belongsToMany(User, { through: 'user-role' });

export default UserRole;
