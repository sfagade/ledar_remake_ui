import express from "express";
import expressGraphQL from "express-graphql";
import schema from "./schema/schema.js";

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server started");
  console.log("listening.......");
});
