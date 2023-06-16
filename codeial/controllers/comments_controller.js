const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async function(req, res){
     let post = await Post.findById(req.body.post_id);


        if (post){
            let comment =await Comment.create({
                content: req.body.content,
                post: req.body.post_id,
                user: req.user._id
            } )

            // Comment.create returns a comment -id 

              
                post.comments.push(comment);
                // Push comment to Comments Array of post 
                await post.save();

                res.redirect('/');
            };
        }


