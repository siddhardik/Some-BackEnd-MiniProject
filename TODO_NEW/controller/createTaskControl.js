const Task = require('../model/task');
module.exports.createTask = (req,res) => {

    Task.create({
        desc: req.body.taskDescrip,
        date: req.body.date,
        category: req.body.taskCat
    })
    .then( (result) => {
        return res.redirect('back');
    })
    .catch( (err)=> {
        console.log(`Error in adding task to DB. Error name: ${err}`);
        return;
    })
}