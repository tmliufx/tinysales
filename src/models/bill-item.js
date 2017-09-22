import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const BillItem = sequelize.define('bill_item', {
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
    count: {
        type: Sequelize.INTEGER,
        comment: '数量'
    },
    amount: {
        type: Sequelize.INTEGER,
        comment: '金额'
    }
},
{
    underscored: true
});

export default BillItem;
