const express = require('express');

const authFacebookRouter = require('./routes/authFacebookRouter');
const authGoogleRouter = require('./routes/authGoogleRouter');
const app = express();

app.use('/', authFacebookRouter);
app.use('/', authGoogleRouter);
app.listen(3001);