import {ConnectionOptions} from 'typeorm';

export interface Config {
	http?: any;
	database?: ConnectionOptions;
}

export const def: Config = {
	http: {
		port: 8080,
		host: 'localhost'
	},
	database: {
		type: process.env.DATABASE_TYPE as any,
		host: process.env.DATABASE_HOST,
		port: parseInt(process.env.DATABASE_PORT, 10),
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		entities: [
			__dirname + '/../**/entity/*.entity{.ts,.js}',
		],
	}
};
