const axios = require('axios');

test('Deve retornar uma lista de filmes com mais de um item', async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  expect(response.status).toBe(200);
  expect(response.data.results.length).toBeGreaterThan(1);
});
