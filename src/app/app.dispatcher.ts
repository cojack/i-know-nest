import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import config from '../config';
import {Logger} from '@nestjs/common';

const logger = new Logger('AppDispatcher');

export class AppDispatcher {
	private app: INestApplication;

	async dispatch() {
		return this.startServer();
	}

	shutdown() {
		this.app.close();
	}

	private async startServer() {
		this.app = await NestFactory.create(AppModule);
		return this.app.listen(config.http.port, config.http.host).then(() => {
			logger.log(`Server listening on ${config.http.host}:${config.http.port}`);
		});
	}
}