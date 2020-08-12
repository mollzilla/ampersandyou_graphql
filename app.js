import express from 'express';
import { graphqlHTTP } from 'express-graphql'; // ese nombre es sólo de convención
import schema from './schema/schema';

const app = express();

app.listen(4050, () => {
  console.log("&mpersand:you server escuchando en puerto 4050");
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})) // seteo middleware, segundo argumento (función) hace el handle de esas requests, recibe un objeto con opciones