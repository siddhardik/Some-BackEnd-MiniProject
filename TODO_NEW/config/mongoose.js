//require the library
const mongoose = require('mongoose');

//connect to the database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/task_db');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//acquire the connection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the db'));

//up and running print message
db.once('open', function () {
    console.log("Successfully connected to database")
});
