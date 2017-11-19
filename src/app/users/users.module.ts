import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {DatabaseModule} from '../database/database.module';
import {usersProviders} from './users.providers';
import {UserService} from './user.service';

@Module({
	modules: [DatabaseModule],
	controllers: [UsersController],
	components: [
		...usersProviders,
		UserService
	],
	exports: [UserService]
})
export class UsersModule {}
