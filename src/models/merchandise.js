import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Merchandise = sequelize.define('merchandise', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '唯一编号'
    },
    name: {
        type: Sequelize.STRING(18),
        comment: '名称'
    },
    desc: {
        type: Sequelize.STRING,
        comment: '描述'
    },
    code: {
        type: Sequelize.STRING(18),
        comment: '条码'
    },
    providerCode: {
        type: Sequelize.STRING(18),
        comment: '商家款号'
    },
    photo: {
        type: Sequelize.STRING,
        comment: '照片'
    },
    unit: {
        type: Sequelize.STRING(8),
        comment: '单位'
    },
    prop: {
        type: Sequelize.STRING(8),
        allowNull: false,
        comment: '色'
    },
    attr: {
        type: Sequelize.STRING(8),
        allowNull: false,
        comment: '尺码'
    }
},
{
    underscored: true
});

export default Merchandise;
