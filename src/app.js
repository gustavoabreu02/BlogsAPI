const express = require('express');
const routesLogin = require('./routes/routes.login');
const routesUser = require('./routes/routes.user');
const routesCategories = require('./routes/routes.categorie');
// ...

const app = express();

app.use(express.json());

app.use('/login', routesLogin);
app.use('/user', routesUser);
app.use('/categories', routesCategories);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
