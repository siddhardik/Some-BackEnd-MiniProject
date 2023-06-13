const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        // ref:'User'
        ref:'userDetails'
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]

},{
    timestamps:true
});
const Post=mongoose.model('postDetails',postSchema);
// postDetails AUTOMATICALLY will be on lower case and plural
module.exports=Post;