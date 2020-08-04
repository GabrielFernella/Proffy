import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); /*é necessário para o express entender json*/
app.use(routes);



console.log("Server is Running http://localhost:3333")
app.listen(3333)