const mongoose=require('mongoose');

const MongoDB_Url="mongodb://127.0.0.1:27017/ContactArea";

// //Connnection between mongoDb DataBase And Node js
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(MongoDB_Url);

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');`
// //    if your database has auth enabled
// }


mongoose.connect(
  MongoDB_Url
)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

//acquire the connection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the db'));

//up and running print message
db.once('open', function () {
    console.log("Successfully connected to database")
});
