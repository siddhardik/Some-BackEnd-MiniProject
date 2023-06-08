const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },

    date : {
        type: String,
        required: true
    },

    category :{
        type: String,
        required: true
    },

    delete : {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;