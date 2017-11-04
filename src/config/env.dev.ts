import {Config} from './env.def';

export const dev: Config = {
	http: {
		port: 8081
	},
	database: {
		type: 'mongodb',
		host: 'localhost',
		database: 'i-know-nest',
		entities: [
			__dirname + '/../**/entity/*.entity{.ts,.js}',
		],
		synchronize: true
	}
};