const axios = require('axios');

test('Deve retornar erro para planeta inexistente', async () => {
  try {
    await axios.get('https://swapi.dev/api/planets/9999/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});
