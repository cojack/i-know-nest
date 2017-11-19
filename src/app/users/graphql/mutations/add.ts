import {
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLID
} from 'graphql';

export default {
	type: GraphQLBoolean,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root, params, options) {
		return true;
	}
};
