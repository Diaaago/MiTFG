

const mongoose = require('mongoose');
const { createIndexes } = require('./models/foodModel');


mongoose.connect('mongodb://localhost:27017/openFoodFacts', {
    useNewUrlParser: true
});

const conn = mongoose.connection;
conn.once('open', ()=> {
    console.log("conectado con exito");
});

