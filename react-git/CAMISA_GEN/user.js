let mongoose = require('mongoose');

module.exports = mongoose.model('Persona',{
    NOMBRE: String,
    APELLIDO: String,
    EMAIL: String,
    TIPOUSUARIO: String,
    PASSWORD: String,
     FOTO: String
});