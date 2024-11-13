const axios = require('axios');

test('Deve retornar dados do personagem Luke Skywalker', async () => {
  const response = await axios.get('https://swapi.dev/api/people/1/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Luke Skywalker');
});
