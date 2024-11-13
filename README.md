# Star Wars SWAPI Tests

Este projeto é um conjunto de testes de integração para a API pública do Star Wars (SWAPI), utilizando Jest e Axios para fazer as requisições. Cada teste cobre uma funcionalidade da API, incluindo validações de dados de personagens, planetas, naves, filmes, e verificações de erro para rotas inexistentes.

## Como rodar os testes

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Rode `npm test` para executar todos os testes.

## Automação com GitHub Actions

O projeto inclui um workflow de GitHub Actions que executa cada teste separadamente em todo `push` ou `pull request`, garantindo a automação e monitoramento contínuos.
