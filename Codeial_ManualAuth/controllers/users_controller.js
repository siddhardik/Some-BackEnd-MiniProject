const User=require("../models/user");


module.exports.profile= function(req, res) {
    if(req.cookies.user_id){
         User.findById(req.cookies.user_id).then(
            (user)=>{
                return res.render('user_profile',{
                    title: "User profile",
                    user:user
                });
            }
         ).catch(
            (err)=>{
                return res.redirect("/users/sign-in");
            }
         );
         
    }

    else{
        return res.redirect("/users/sign-in");
    }
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
  
    // Steps To Authenticate 

    // Find User 
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
            //User Found

            //Handle Password do not match
            if(user.password !== req.body.password){
                return res.redirect('back');
            }

            // Handle  Session Creation

            res.cookie("user_id", user.id);
            return res.redirect('/users/profile');
               
        }
            else{
                // USer Not Found 
               return res.redirect('back');
            }

    }).catch(err=>{
        if(err){

            console.log("Error in finding user  to DB. Error");
            return ;
        }

    });


}
