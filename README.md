# Olá pessoa, esse é um desafio para pratica dos seus conceitos de front

### A ideia é a seguinte, crie um front-end em que um usuário possa ver o numero aleatório gerado por essa API, e com esse numero permita que ele adicione outro número e seu nome, após isso realize uma operação matemática que você escolher (soma, subtração, multiplicação,...), ao fim mostre o resultado em tela e faça uma requisição para a API para obtermos um histórico das operações.

#### Exemplo do processo:  <br>
- Fazer o GET em /number 
- exibir em tela:
    - o numero, 
    - a operação que você definir,
    - input do valor do usuário,
    - input do nome do usuário,
    - botão de enviar
- ao clicar em enviar
    - realizar a operação matemática dos dois números
    - mostrar o resultado em tela
    - fazer requisição POST
---
GET

- endpoint: /
  <br>
  Retorna todos os valores adicionados
- endpoint: /number
  <br>
  Retorna um valor numérico de 0 a 100

POST

- endpoint: /
  <br>
  body:<br>
  `{ "name":"Renato", "expression":"2+2", "result":"4" }`
  <br>
  Obs. todos são obrigatórios
