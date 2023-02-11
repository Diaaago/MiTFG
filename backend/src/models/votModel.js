const { Schema, model, default: mongoose } = require('mongoose');

const votSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    vot: Object,

}, {
    collection: 'valoraciones'
}, {
    timestamps: true
});

module.exports = model('votModel', votSchema);
