const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        // ref:'User'
        ref:'User'
        // Referce to the Collection Name
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]

},{
    timestamps:true
});
const Post=mongoose.model('Post',postSchema);
// 'Post' AUTOMATICALLY will be on lower case and plural When Collection will be created on DB
module.exports=Post;