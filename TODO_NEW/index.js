const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');

//setting the view engine as EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

//using index.js in routes folder
app.use('/', require('./routes')); //by default require index.js route
app.use(express.static('./asset'));

app.listen(port, (err) => {

    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`Successfully server started at port: ${port}`)
})