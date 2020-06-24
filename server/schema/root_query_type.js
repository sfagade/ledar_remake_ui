import graphql from "graphql";
import OccupationType from "./occupation_type.js";
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const baseURL = `http://localhost:8761`;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    occupations: {
      type: new GraphQLList(OccupationType),
      async resolve() {
        const res = await fetch(`${baseURL}/referenceData/api/occupationResource/fetchAllOccupations`);
        return await res.json();
      },
    },
  }),
});

export default RootQueryType;
