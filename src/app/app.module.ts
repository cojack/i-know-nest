import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {DatabaseModule} from './database/database.module';
import {GraphqlModule} from './graphql/graphql.module';

@Module({
	modules: [DatabaseModule, UsersModule, GraphqlModule]
})
export class AppModule {}
