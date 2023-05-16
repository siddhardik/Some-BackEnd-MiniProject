const express = require('express');
const path = require('path');
const port = 8001;

const db=require('./config/mongoose');


const Contact=require('./models/contact');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// var contactList = [
//     {
//         name: "siddhi",
//         phone: "1111111111"
//     },
//     {
//         name: "Dj Sidddhi",
//         phone: "1234567890"
//     },
//     {
//         name: "Dj wow",
//         phone: "12131321321"
//     }
// ]





app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});



// app.get('/',  function(req, res){
     

//      return res.render('home',{
//          title: "Contact List",
//          contact_list: contactList
//      });
//  })


app.get('/', async function(req, res){
     
   var contactListFromDB =await Contact.find();
    return res.render('home',{
        title: "Contact List",
        contact_list: contactListFromDB
    });
})

app.post('/create-contact', function(req, res){
    
    // contactList.push(req.body);
    // return res.redirect('/');
    console.log(req.body);

    Contact.create({
       name: req.body.name,
       phone: req.body.phone
    })
    .then( (result) => {
        return res.redirect('back');
    })
    .catch( (err)=> {
        console.log(`Error in adding PhoneNo to DB. Error name: ${err}`);
        return;
    })

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


// app.get('/delete-contact/', function(req, res){
//     console.log(req.query);
//     let phone = req.query.phone

//     let contactindex = contactList.findIndex(contact => contact.phone == phone);

//     if(contactindex != -1){
//         contactList.splice(contactindex, 1);
//     }

    

//     return res.redirect('back');
// });

app.get('/delete-contact/', async function(req, res){
    console.log(req.query);
    let phoneNow = req.query.phone
    
    await Contact.findOneAndRemove({phone:phoneNow});
        

    return res.redirect('back');
});


