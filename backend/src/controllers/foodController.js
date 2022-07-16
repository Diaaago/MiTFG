const foodController = {};
const productosController = {};
const axios = require('axios');
const { response } = require('express');


const foodModel = require('../models/foodModel');  
foodController.getFoods = async (req, res) => {
    const data = [];
    let totalProductos = 0;
    let manufacturingLike = 0;
    let packagingLike = 0;
    let palmoilLike = 0;
    let sizeLike = 0;
    let storageLike = 0;
    let transportLike = 0;
    const cod = req.params.id;
    const productos = await axios.get('https://world.openfoodfacts.org/api/v0/product/' + cod + '.json');
    await foodModel.find().then(data => {
        for(const i in data[0].response) {
            if(data[0].response[i].vot[cod]["en:manufacturing"] == true) {
                manufacturingLike ++;
            }
            if(data[0].response[i].vot[cod]["en:packaging"] == true) {
                packagingLike ++;
            }
            if(data[0].response[i].vot[cod]["en:palm-oil"] == true) {
                palmoilLike ++;
            }
            if(data[0].response[i].vot[cod]["en:size"] == true) {
                sizeLike ++;
            }
            if(data[0].response[i].vot[cod]["en:storage"] == true) {
                storageLike ++;
            }
            if(data[0].response[i].vot[cod]["en:transport"] == true) {
                transportLike ++;
            }
            totalProductos = i;
        }
    });
    

    
    //console.log(vot[0].response)
    //console.log(vot[0].response[0].vot[cod]["en:manufacturing"])
    
    console.log('manufacturing', manufacturingLike)
    console.log('packaging', packagingLike)
    console.log('palm-oil', palmoilLike)
    console.log('size', sizeLike)
    console.log('storage', storageLike)
    console.log('transport', transportLike)
    console.log('total', totalProductos)
    data.push({
        id : req.params.id,
        img : productos["data"]["product"]["selected_images"]["front"]["display"]["fr"],
        product_name : productos["data"]["product"]["product_name"],
        categories : productos["data"]["product"]["categories"],
        brand : productos["data"]["product"]["brands"],
        etiquetas : productos["data"]["product"]["labels_old"],
        country: productos["data"]["product"]["countries"],
        manufacturing: (manufacturingLike/totalProductos) *100,
        packaging: (packagingLike/totalProductos) *100,
        palmoil: (palmoilLike/totalProductos) *100,
        size: (sizeLike/totalProductos) *100,
        storage: (storageLike/totalProductos) *100,
        transport: (transportLike/totalProductos) *100
    });
    res.json(data);
}
 
module.exports = foodController;