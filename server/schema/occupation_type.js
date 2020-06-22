import graphql from 'graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLDate
} = graphql;

const OccupationType = new GraphQLObjectType({
    name: 'Occupation',
    fields: {
        id: { type: GraphQLInt },
        occupationName: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
    }
});