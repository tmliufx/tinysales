import winston from 'winston';
import config from 'config';
import moment from '../lib/moment';

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            colorize: 'all',
            timestamp: () => moment().format('lll')
        })
    ]
});
logger.level = config.get('logger.level') || 'error';

export default logger;
