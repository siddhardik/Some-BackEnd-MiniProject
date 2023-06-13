const Post=require('../models/post');
module.exports.create=function(req,res){
     console.log(req.body);
     Post.create({
        content:req.body.content,
        user:req.user._id
     }).then((newPost)=>{
        console.log("The new post is at DataBase " + newPost);
        return res.redirect('back');
     }).catch((err)=>{
        console.log('error in creating post');
             return;
     });
    };


//      }),function(err,post){
//         if(err)
//         {
//             console.log('error in creating post');
//             return;
//         }
//         return res.redirect('back');
        
//      });
// }

