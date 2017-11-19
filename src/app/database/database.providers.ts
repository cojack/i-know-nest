import config from '../../config';
import {createConnection} from 'typeorm';
import {DB_CON_TOKEN} from './database.constant';

export const databaseProviders = [
	{
		provide: DB_CON_TOKEN,
		useFactory: async () => createConnection(config.database)
	}
];
