const {Schema, model } = require ('mongoose');

const foodSchema = new Schema({
    username: String,
    vot: Object

},{
    timestamps: true
});

module.exports = model('foodModel', foodSchema);
