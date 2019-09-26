/* src/index.js */
import 'source-map-support/register';
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';import resolvers from './resolvers';
import schema from './schema';const app = express();const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

app.post('/graphql',
  bodyParser.json(),
  graphqlExpress(() => ({
    schema: executableSchema
  }))
);

app.listen(8080);