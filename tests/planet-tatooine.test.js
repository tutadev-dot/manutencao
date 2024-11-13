const axios = require('axios');

test('Deve retornar dados do planeta Tatooine', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/1/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Tatooine');
});
