

const mongoose = require('mongoose');
//const { createIndexes } = require('./models/votModel');


mongoose.connect('mongodb://localhost:27017/openFood', {
    useNewUrlParser: true
}).catch(err => console.log('error', err));

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("conectado a bd con exito");
});

