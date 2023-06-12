const passport=require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User= require('../models/user');

passport.use(new LocalStrategy({
  usernameField: 'email'
},

function(email,password,done){
 // Find the user and establish the identity
 User.findOne({email: email})
 .then((user)=>{
    if(!user || user.password != password){
        console.log("Inavlid UserName/Password mismatch");
        return done(null,false);
    }

    else{
        return done(null,user);
    }

 })
 .catch((err)=>{
    console.log("Error is Finding the User in the database --> passport_Js");

    return done(err);
 })
 
}));


// Serialize the user to decide which key to be kept in the cookies

passport.serializeUser(function(user,done){
    done(null,user.id);
});



//Deserialize the user from the key in the cookie

passport.deserializeUser(function(id,done){
     User.findById(id)
     .then(
        (user) =>{
               return done(null,user);
        }
     )
     .catch(
        (err) =>{
            console.log("Error is Finding the User in the database --> passport_Js");

            return done(err);
        }
     );
});


// Check if the user is Authenticated

passport.checkAuthentication= function(req,res,next){
    // If user is signed in , pass to the req to next function (controller's Action)
    if(req.isAuthenticated()){
        return next();
    }
    // If the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser= function(req,res,next){

    if(req.isAuthenticated()){
        //req.user conatins the current Signed In user  from the session cookie ,
        // Now We are just sending this  to the locals for the view

        res.locals.user = req.user;
    }
    next();
};

module.exports = passport;



