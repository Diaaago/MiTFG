const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', 4000);
app.use(cors());
app.use(express.json());



//routers
app.use('/food', require('./routers/food')); //obtener codigo de barra



module.exports = app;