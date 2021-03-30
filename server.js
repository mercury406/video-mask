const express = require('express');
const app = express();
const routes = require('./routes/web')
const port = process.env.PORT || 9000


app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs')

// routes
app.use(routes)


// start server
app.listen(port);