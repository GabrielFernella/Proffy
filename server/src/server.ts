import express from 'express';

const app = express();

app.use(express.json()); /*é necessário para o express entender json*/

app.get('/', (request, response) => {
   return response.json({message: "Hello"})
})


console.log("Server is Running http://localhost:3333")
app.listen(3333)