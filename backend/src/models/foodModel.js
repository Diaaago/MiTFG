const {Schema, model } = require ('mongoose');

const foodSchema = new Schema({
    conf: Object,
    hash: String,
    salt: String,
    username: String,
    vot: Object

},{
    timestamps: true
});

module.exports = model('foodModel', foodSchema);
