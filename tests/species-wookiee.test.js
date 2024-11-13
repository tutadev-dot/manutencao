const axios = require('axios');

test('Deve retornar dados da espécie Wookiee', async () => {
  const response = await axios.get('https://swapi.dev/api/species/3/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Wookie');
});
