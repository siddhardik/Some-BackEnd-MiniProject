const mongoose = require('mongoose');

const contactSchema=new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    phone:{
        type: 'string',
        required: true
    }
  });

//   A model is a class with which we construct documents.
const Contact = mongoose.model('Contact', contactSchema);

module.exports=Contact;