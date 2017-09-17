import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';
import Company from './company';

const BankAccount = sequelize.define('bank_account', {
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
        type: Sequelize.STRING,
        comment: '描述'
    },
    account: {
        type: Sequelize.STRING(48),
        allowNull: false,
        comment: '账号'
    },
    owner: {
        type: Sequelize.STRING(18),
        allowNull: false,
        comment: '户主名称'
    },
    amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '金额'
    }
},
{
    underscored: true
});

BankAccount.belongsTo(Company);

export default BankAccount;
