const app = require("express")();
const graphqlHTTP = require("express-graphql");
const bodyParser = require("body-parser");
const schema = require("./GraphQL");

app.use(bodyParser.json());
app.get(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    formatError: error => ({
      msg: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split("\n") : [],
      path: error.path
    })
  })
);
app.post(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    formatError: error => ({
      msg: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split("\n") : [],
      path: error.path
    })
  })
);

module.exports = app;
