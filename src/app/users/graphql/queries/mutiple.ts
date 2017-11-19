import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLID
} from 'graphql';
import {ModuleRef} from '@nestjs/core';
import {UserService} from '../../user.service';

export default {
	type: new GraphQLList(GraphQLID),
	async resolve(root, params, ctx, options) {
		const moduleRef: ModuleRef = root.moduleRef;
		const user = moduleRef.get<UserService>(UserService);
		return await user.findAll();
	}
};
