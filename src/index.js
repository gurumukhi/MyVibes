/* src/index.js */
import "source-map-support/register";
import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import schema from "./schema";
var cors = require("cors");

const app = express();
app.use(cors());

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

app.post(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(() => ({
    schema: executableSchema
  }))
);

// Add GraphiQL Middleware
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
app.listen(8080);
