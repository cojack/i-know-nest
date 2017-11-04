require('dotenv-safe').config({
	allowEmptyValues: false
});
import {Logger} from '@nestjs/common';
import {AppDispatcher} from './app/app.dispatcher';

const logger = new Logger('Index');

const dispatcher = new AppDispatcher();
dispatcher.dispatch().then(() => {
	logger.log('Everything up');
});

process.on('SIGTERM', () => {
	dispatcher.shutdown();
	logger.log('Graceful shutdown the server');
	process.exit();
});