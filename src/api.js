const express = require('express');
require('express-async-errors');

const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');

const handleError = require('./middleware/handleError');
const categoryRouter = require('./router/categoryRouter');
const blogPostRouter = require('./router/blogPostRouter');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostRouter);
app.use(handleError);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
