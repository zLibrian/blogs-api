const express = require('express');
const handleError = require('./middleware/handleError');
require('express-async-errors');
const loginRouter = require('./router/login');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use(handleError);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
