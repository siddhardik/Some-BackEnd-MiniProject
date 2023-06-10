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
const Contact = mongoose.model('contacts', contactSchema);

// const schema = new mongoose.Schema({ name: String, size: String });
// const Tank = mongoose.model('Tank', schema);
// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name.
//  Thus, for the example above, the model Tank is for the tanks collection in the database.

// Note: The .model() function makes a copy of schema. Make sure that you've added
//  everything you want to schema, including hooks, before calling .model()!

module.exports=Contact;