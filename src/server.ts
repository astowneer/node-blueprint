import express from 'express';

const app = express();
app.disable('x-powered-by');

app.get('/', (request, response) => {
  response.send('Hello World!');
});

const PORT = 3001;

app.listen(PORT, () => {});
