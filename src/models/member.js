import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Member = sequelize.define('member', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING(18),
        comment: '会员编号'
    },
    name: {
        type: Sequelize.STRING(18),

        comment: '名称'
    },
    phone: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '手机'
    },
    weixin: {
        type: Sequelize.STRING(18),
        comment: '微信号'
    }
},
{
    paranoid: true,
    underscored: true
});

export default Member;
