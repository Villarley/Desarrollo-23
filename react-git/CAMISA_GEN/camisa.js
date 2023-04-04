let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let camisa = new Schema({
    NOMBRE: String,
    COLOR1: String,
    COLOR2: String,
    COLOR3: String,
    LIKES: Number,
    IMAGEN: String
    }
);

module.exports = mongoose.model('camisa', camisa);