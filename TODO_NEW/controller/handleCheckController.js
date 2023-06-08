const Task = require('../model/task');
module.exports.handleCheck = function (req, res) {

    let id = req.query.id;

     Task.findByIdAndDelete(id)
     .catch((err) => {
        console.log("Error in deleting the contact")
     })

     return res.redirect('back');

}