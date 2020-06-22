//import _ from 'lodash';
import graphql from 'graphql';
const { GraphQLSchema } = graphql;

import RootQueryType from './root_query_type';
import mutations from './mutations';

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: mutations
});
