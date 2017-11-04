import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {DatabaseModule} from './database/database.module';

@Module({
	modules: [DatabaseModule, UsersModule]
})
export class AppModule {}