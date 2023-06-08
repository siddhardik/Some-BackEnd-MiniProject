const Task = require('../model/task');
module.exports.homePage = function(req, res){

    Task.find({})
    .then( (result) => {

        // console.log(result);

        return res.render('home',{
            title: "TODO List",
            taskList: result
        })
    })
    .catch( (err) => {
        console.log(`Error in fetching details from DB ${err}`);
    })
 
    
}