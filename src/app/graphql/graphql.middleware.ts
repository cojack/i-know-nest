import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import {ModuleRef} from '@nestjs/core';
import * as graphqlHTTP from 'express-graphql';
import MySchema from './graphql.schema';

@Middleware()
export class GraphqlMiddleware implements NestMiddleware {
	constructor(private readonly moduleRef: ModuleRef) {}

	public resolve(): ExpressMiddleware {
		return graphqlHTTP({
			schema: MySchema,
			rootValue: {
				moduleRef: this.moduleRef
			},
			graphiql: true
		});
	}
}
