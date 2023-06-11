const User=require("../models/user");

module.exports.profile= function(req, res) {
    return res.render('user_profile', {
        title:"user profile",
    });
}

// Render the sign Up page
module.exports.signUp= function(req,res){
    return res.render('user_sign_up', {
        title:"Codeial | Sign Up",
    });
}

// Render the sign In Page
module.exports.signIn= function(req,res){
    return res.render('user_sign_in', {
        title:"Codeial | Sign In",
    });
}

// Get The sign up data
module.exports.create= function(req,res){
    
    if(req.body.password !=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            User.create(req.body)
             .then( (result) => {
                 return res.redirect('/users/sign-in');
             })
             .catch( (err)=> {
                 console.log(`Error in adding Sign Up Details to DB. Error name: ${err}`);
                 return;
             })
         
            }
            else{
               return res.redirect('back');
            }

    }).catch(err=>{
        if(err){

            console.log("Error in finding user  to DB. Error");
            return ;
        }

    });

}

module.exports.createSession=function(req,res){

}
