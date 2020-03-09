const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');

const chartRouter = require('./routes/api/chart');
//body parse middleware
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods" , "GET,POST,OPTIONS,DELETE,PUT,PATCH");
    next();
  });

app.use(express.urlencoded({extended : false}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Init middleware
//app.use(logger);
//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//set api members routes
app.use('/api/charts', chartRouter);
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));