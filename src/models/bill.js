import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';
import BillItem from './bill-item';

const Bill = sequelize.define('bill', {
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
    number: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '单号'
    },
    desc: {
        type: Sequelize.STRING,
        comment: '说明'
    },
    type: {
        type: Sequelize.STRING(8),
        allowNull: false,
        comment: '类型'
    },
    remark: {
        type: Sequelize.STRING,
        comment: '备注'
    },
    amount: {
        type: Sequelize.INTEGER,
        comment: '总金额'
    },
    invalid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        comment: '单据是否有效'
    }
});

Bill.hasMany(BillItem);
Bill.belongsTo(Company);

export default Bill;
