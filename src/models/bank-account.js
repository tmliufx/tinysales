import Sequelize from 'sequelize';
import sequelize from '../lib/sequelize';

const BankAccount = sequelize.define('bankAccount', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '统一编号'
    },
    name: {
        type: Sequelize.STRING,
        comment: '银行卡名称'
    },
    desc: {
        type: Sequelize.STRING,
        comment: '银行卡描述'
    },
    account: {
        type: Sequelize.STRING,
        comment: '银行卡账号'
    },
    owner: {
        type: Sequelize.STRING,
        comment: '银行卡户主名称'
    },
    amount: {
        type: Sequelize.INTEGER,
        comment: '银行卡金额'
    }
});

export default BankAccount;
