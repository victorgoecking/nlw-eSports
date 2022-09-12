import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1, name: 'John',
    },
    {
      id: 2, name: 'Opa',
    },
    {
      id: 3, name: 'teste',
    },
    {
      id: 4, name: 'sdasd',
    },
  ])
})

app.listen(3333)