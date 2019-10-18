const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  buildSchema,
  GraphQLList,
  GraphQLID
} = require("graphql");

let LinkType = new GraphQLObjectType({
  id: GraphQLID,
  name: "Link",
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const Schema = db => {
  const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: () => ({
        links: {
          type: new GraphQLList(LinkType),
          resolve: () =>
            db
              .collection("links")
              .find({})
              .toArray()
        }
      })
    })
  });
  return graphQLSchema;
};

module.exports = Schema;
