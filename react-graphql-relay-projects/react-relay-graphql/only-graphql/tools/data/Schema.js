//const Graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, buildSchema, GraphQLList  } = require('graphql');
//const MongoUtils = require('../db/mongoUtils');

let counter = 100;
let message = 'Test Message'
let data = [42, 43, 44]
let complexData = [
    {counter: 41},
    {counter: 42},
    {counter: 43}
]

let ComplexType = new GraphQLObjectType({
    name: 'Counter',
    fields: () => ({
        counter: {
            type: GraphQLInt
        }
    })
});

let LinkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        url: {type: GraphQLString}
    })
});

const Schema  = (db) => {
    const graphQLSchema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                counter: {
                    type: GraphQLInt,
                    resolve: () => counter
                },
                message: {
                    type: GraphQLString,
                    resolve: () => message
                },
                data: {
                    type: new GraphQLList(GraphQLInt),
                    resolve: () => data
                },
                complexData: {
                    type: new GraphQLList(ComplexType), // custom type needed here 
                    resolve: () => complexData
                },
                links: {
                    type: new GraphQLList(LinkType),
                    resolve: () =>  db.collection("links").find({}).toArray()
                    
                }    
            })
        }),
        mutation: new GraphQLObjectType({
            name: 'Mutations',
            fields: () => ({
                incrementCounter: {
                    type: GraphQLInt,
                    resolve: () => ++counter
                
                },
                updateMessage: {
                    type: GraphQLString,
                    resolve: (newMessage) => {
                        message = newMessage;
                    }
                }
            })
        })
    });
    
    // const Schema = new Graphql.GraphQLSchema({
    //     query: new Graphql.GraphQLObjectType({
    //         name: 'Query',
    //         fields: () => ({
    //             counter: {
    //                 type: Graphql.GraphQLInt,
    //                 resolve: () => 42
    //             }
    //         })
    //     })
    //     //mutation: ''
    // });
    return graphQLSchema;    
};


module.exports = Schema;