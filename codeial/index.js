const express = require('express');
const app = express();

const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.static('./assets'));

// Extract style and script from sub pages into layouts 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


const port =8000;

app.set('view engine', 'ejs');

app.set('views','./views');


app.use("/",require('./routes/index'));
// By default it looks for index.js file 

app.listen(port,(err)=>{
    if(err){
        console.log("Error" + err);
        // return ;
    }


    console.log(`Serving at ${port}`);
});