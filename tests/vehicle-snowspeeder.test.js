const axios = require('axios');

test('Deve retornar dados do veículo Snowspeeder', async () => {
  const response = await axios.get('https://swapi.dev/api/vehicles/14/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Snowspeeder');
});
