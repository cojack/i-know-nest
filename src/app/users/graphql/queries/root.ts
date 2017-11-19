import {
	GraphQLString
} from 'graphql';

export default {
	type: GraphQLString,
	resolve(root, params, ctx, options) {
		return 'hello world';
	}
};
