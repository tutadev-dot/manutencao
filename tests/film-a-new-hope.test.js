const axios = require('axios');

test('Deve retornar dados do filme "A New Hope"', async () => {
  const response = await axios.get('https://swapi.dev/api/films/1/');
  expect(response.status).toBe(200);
  expect(response.data.title).toBe('A New Hope');
});
