const foodController = {};
const productosController = {};
const axios = require('axios');


const foodModel = require('../models/foodModel');  
foodController.getAllFoods = async (req, res) => {
    let data = [];
    let codigoBarra = [];
    const food = await foodModel.find();
    codigoBarra = Object.keys(food[0]["vot"]);
    for(let i = 0; i < codigoBarra.length; i++){
        await axios.get('https://world.openfoodfacts.org/api/v0/product/' + codigoBarra[i] + '.json').then(response => {
            data.push({
                id : codigoBarra[i],
                img : response["data"]["product"]["selected_images"]["front"]["display"]["fr"],
                product_name : response["data"]["product"]["product_name"],
                brand : response["data"]["product"]["brands"],
                etiquetas : response["data"]["product"]["labels_old"],
                country: response["data"]["product"]["countries"],
                vot : food[0]["vot"][codigoBarra[i]]
            });
        })
    }
    //console.log(data)
    //res.json(productos.data)
    res.json(data);
}

foodController.getFoods = async (req, res) => {
    const data = [];
    const productos = await axios.get('https://world.openfoodfacts.org/api/v0/product/' + req.params.id + '.json');
    const vot = await foodModel.find();
    data.push({
        id : req.params.id,
        img : productos["data"]["product"]["selected_images"]["front"]["display"]["fr"],
        product_name : productos["data"]["product"]["product_name"],
        brand : productos["data"]["product"]["brands"],
        etiquetas : productos["data"]["product"]["labels_old"],
        country: productos["data"]["product"]["countries"],
        vot : vot[0]["vot"][req.params.id]
    });
    //res.json(productos.data)
    res.json(data);
}
 
module.exports = foodController;