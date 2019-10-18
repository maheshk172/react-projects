const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors')
const Schema = require('./data/Schema');
const GraphQLHTTP = require('express-graphql');

const server = express();

server.use(cors());

const mongoURL = process.env.MONGO_URL || 'mongodb://admin1:admin1@ds121371.mlab.com:21371/relay-playground'
let db;
MongoClient.connect(mongoURL, (err, dbClient) => {
  if (err) throw err;
  db = dbClient.db('relay-playground');

  server.use('/graphql', GraphQLHTTP({
    schema: Schema(db),
    graphiql: true
  }));


  server.listen(3001, () => console.log('Server is running...'));
});


// server.use('/graphql', GraphQLHTTP({
//   schema: Schema,
//   graphiql: true
// }));

server.get('/data/links', (req, resp) => {
  db.collection("links").find({}).toArray((err, links) => {
    console.log('error2: ', err);
    if (err) throw err;
    console.log(links);
    resp.json(links);
  });

  //resp.json([{ "_id": "5da7eefde7179a02244dd731", "title": "Test1", "url": "https://www.google.co.in" }]);
});