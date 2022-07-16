

const mongoose = require('mongoose');
const { createIndexes } = require('./models/foodModel');


mongoose.connect('mongodb://localhost:27017/test1', {
    useNewUrlParser: true
}).catch(err => console.log('error', err));

const conn = mongoose.connection;
conn.once('open', ()=> {
    console.log("conectado con exito");
});

