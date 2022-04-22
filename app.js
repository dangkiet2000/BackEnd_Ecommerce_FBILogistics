const express = require('express');
const DBConnection = require('./db/connect')
const cors = require('cors')

const productRouter = require('./routes/productRouter')
const authFacebookRouter = require('./routes/authFacebookRouter');
const authGoogleRouter = require('./routes/authGoogleRouter');
const app = express();

app.use(cors())
app.use('/', authFacebookRouter);
app.use('/', authGoogleRouter);
app.use('/api/v1/product',productRouter)
async function start() {
    try {
        await DBConnection()
        app.listen(3001, console.log(`server is listening on port 3001...`))
    } catch (err) {
        console.log(err)
    }
}

start()