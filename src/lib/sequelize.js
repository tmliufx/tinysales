import Sequelize from 'sequelize';
import Config from 'config';

const sequelize = new Sequelize(
    Config.get('db_server.db_name'),
    Config.get('db_server.username'),
    Config.get('db_server.password'),
    {
        host: Config.get('db_server.host'),
        dialect: 'mysql',
        dialectOptions: { // MySQL > 5.5，其它数据库删除此项
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_520_ci',
            supportBigNumbers: true,
            bigNumberStrings: true
        },
        pool: {
            max: 50,
            min: 0,
            idle: 10000
        }
    });

export default sequelize;
