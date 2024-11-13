const axios = require('axios');

test('Deve retornar uma lista de personagens maior que 10', async () => {
  const response = await axios.get('https://swapi.dev/api/people/');
  expect(response.status).toBe(200);
  expect(response.data.results.length).toBeGreaterThan(0);
});
