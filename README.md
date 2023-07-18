# Projeto BlogsAPI  

Este projeto é uma API desenvolvida em Node.js com a finalidade de criar um sistema para gerenciamento de conteúdo de um blog. Utilizamos o pacote sequelize para implementar um CRUD de posts e um banco de dados MySQL para armazenamento de dados. 

# Funcionalidades

A API possui os seguintes recursos e funcionalidades:

- Endpoints RESTful para criação, atualização, consulta e exclusão de posts;
- Autenticação de usuários e login para a criação de posts;
- Relação entre usuários e posts;
- Criação e associação de categorias a posts;
- Listagem de posts por categoria.

## Stack utilizada

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

**Back-end:**

- Node.js
- Docker
- Dotenv
- Express
- Express-async-errors
- Joi
- Jsonwebtoken
- Morgan
- MySQL2
- Sequelize
- Shelljs

## Como executar a aplicação

Para executar a aplicação, siga os seguintes passos:

1. Instale o Node.js e o Docker em seu computador;
2. Clone este repositório em sua máquina;
3. Abra o terminal na pasta raiz do projeto e execute o comando `npm install` para instalar as dependências do projeto;
4. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente conforme o arquivo `.env.example`;
5. Execute o comando `npm start` para iniciar a aplicação.

Agora a aplicação estará disponível em `http://localhost:3000`. 

## Endpoints

### `/login`

- `POST /login`: realiza a autenticação do usuário com base em seu email e senha e retorna um token de autenticação.

### `/user`

- `POST /user`: cria um novo usuário na base de dados;
- `GET /user/:id`: busca um usuário específico pelo ID;
- `PUT /user/:id`: atualiza as informações de um usuário específico;
- `DELETE /user/:id`: exclui um usuário específico.

### `/categories`

- `POST /categories`: cria uma nova categoria na base de dados;
- `GET /categories/:id`: busca uma categoria específica pelo ID;
- `PUT /categories/:id`: atualiza as informações de uma categoria específica;
- `DELETE /categories/:id`: exclui uma categoria específica.

### `/post`

- `POST /post`: cria um novo post na base de dados;
- `GET /post/:id`: busca um post específico pelo ID;
- `GET /post?category=:categoryId`: busca os posts de uma categoria específica;
- `PUT /post/:id`: atualiza as informações de um post específico;
- `DELETE /post/:id`: exclui um post específico.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou uma pull request.

## Autores

- [@gustavoabreu02](https://www.github.com/gustavoabreu02)
