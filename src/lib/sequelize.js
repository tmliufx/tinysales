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

sequelize.connection = () => {
    // 测试数据库链接
    sequelize.authenticate().then(() => {
        console.log('数据库连接成功');
    }).catch(err => {
        // 数据库连接失败时打印输出
        console.error(err);
        throw err;
    });
};

export default sequelize;
