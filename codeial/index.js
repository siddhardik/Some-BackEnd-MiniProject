const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// import { default as connectMongoDBSession} from 'connect-mongodb-session';

// const MongoDBStore = connectMongoDBSession(session);

const db=require('./config/mongoose');

const expressLayouts=require('express-ejs-layouts');

// Used For Session Cookie 
const session = require('express-session');
const passport = require('passport');
const passportLocal=require('./config/passport-local-strategy');

app.use(expressLayouts);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

// Extract style and script from sub pages into layouts 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


const port =8000;

app.set('view engine', 'ejs');

app.set('views','./views');



// By default it looks for index.js file 
// Mongo Store is used to store the session cookie in the db
app.use(session(
{
    name: 'codeial',
    // Change the secret before deployment production
    secret:'blahsomething',

    saveUninitialized: false,
    resave:false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    },
    function(err){
        console.log(err || 'Connect - MongoDB SetUp Ok! ');
    })
}
));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/",require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log("Error" + err);
        // return ;
    }


    console.log(`Serving at ${port}`);
});