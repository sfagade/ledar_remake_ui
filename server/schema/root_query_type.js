import graphql from 'graphql';
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
import OccupationType from './occupation_type';

const baseURL = `http://localhost:8761`


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        occupations: {
            type: new GraphQLList(OccupationType),
            async resolve() {
                const res = await fetch(`${baseURL}/referenceData/api/occupationResource/fetchAllOccupations`);
                return await res.json();
            }
        },
    })
});

export default RootQuery;
