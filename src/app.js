const express = require('express');
const routesLogin = require('./routes/routes.login');
// ...

const app = express();

app.use(express.json());

app.use('/login', routesLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
