const Post = require('../models/post');

module.exports.home = async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
    let posts= await Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec();

   if(posts){
    return res.render('home', {
        title: "Codeial | Home",
        posts:  posts
    });
   }

}

// module.exports.actionName = function(req, res){}