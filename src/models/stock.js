import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const Stock = sequelize.define('stock', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '唯一编号'
    },
    const: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '成本'
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '售价'
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '数量'
    }
},
{
    underscored: true
});

export default Stock;
