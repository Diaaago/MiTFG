const {Schema, model } = require ('mongoose');

const foodSchema = new Schema({
    response: Object

},{
    timestamps: true
});

module.exports = model('foodModel', foodSchema);
