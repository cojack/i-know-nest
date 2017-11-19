import {NestFactory} from '@nestjs/core';
import {Logger, INestApplication} from '@nestjs/common';
import {AppModule} from './app.module';
import config from '../config';

const logger = new Logger('AppDispatcher');

export class AppDispatcher {
	private app: INestApplication;

	public async dispatch() {
		return this.startServer();
	}

	public shutdown(): void {
		this.app.close();
	}

	private async startServer() {
		this.app = await NestFactory.create(AppModule);
		return this.app.listen(config.http.port, config.http.host).then(() => {
			logger.log(`Server listening on ${config.http.host}:${config.http.port}`);
		});
	}
}
