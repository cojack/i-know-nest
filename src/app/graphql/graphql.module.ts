import {Module} from '@nestjs/common';
import {GraphqlController} from './graphql.controller';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {GraphqlMiddleware} from './graphql.middleware';
import {UsersModule} from '../users/users.module';

@Module({
	controllers: [GraphqlController],
	modules: [UsersModule]
})
export class GraphqlModule {
	public configure(consumer: MiddlewaresConsumer): void {
		consumer.apply(GraphqlMiddleware).forRoutes(GraphqlController);
	}
}
