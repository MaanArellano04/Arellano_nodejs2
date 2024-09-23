const bodyParser = require('body-parser');
const express = require('express'); 
const routes = require('./routes/router.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

app.listen(3001, () => {
    console.log('server initilized on http://localhost:3001');
});