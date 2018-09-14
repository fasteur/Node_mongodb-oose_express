const Mongoose = require('mongoose');
const Client = require('./models/client');

Mongoose.Promise = global.Promise;
// --------- Connexion

Mongoose.connect('mongodb://@localhost:27017/technocite',(error)=>{
    if(error) throw error ;
    console.log('Mongo is now connected to our system please requests away');
});

// let client = new Client({
//     firstname: 'Marc',
//     lastname: 'Moissa',
//     address: '39, Place de Saint-Malo',
//     vat : 'BE123456789',
//     company: 'Moissa INC',
//     sectors: ['Industry','Fisching']
// })
// let client = new Client({
//     firstname: 'Roger',
//     lastname: 'Mofdjfa',
//     address: '3, Plafgfgce de Saint-Malo',
//     vat : 'BE124856789',
//     company: 'Roger INC',
//     sectors: ['Fisching']
// })

// let client = new Client({
//     firstname: 'Florian',
//     lastname: 'Asteur',
//     address: '34, Rue tienne de faux',
//     vat : 'BE145454545',
//     company: 'Asteur INC',
//     sectors: ['Web consulting']
// })
// client.save()

// console.log('see you space cowboy!');
//--https://mongoosejs.com/docs/queries.html--
//--- find

Client.find(
    {firstname:'Florian'},
    {lastname:1 , firstname :1},
    (error,clients)=>{
        console.log(clients);
    }
);
//----findOne
//----findById
//----findByIdAndUpdate
//----findOnedAndUpdate