import {Connection} from 'typeorm';
import {UserEntity} from './entity/user.entity';
import {USER_REPO_TOKEN} from './users.constant';
import {DB_CON_TOKEN} from '../database/database.constant';

export const usersProviders = [
	{
		provide: USER_REPO_TOKEN,
		useFactory: (connection: Connection) => connection.getRepository(UserEntity),
		inject: [DB_CON_TOKEN],
	},
];