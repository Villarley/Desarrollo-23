var controllerUsers = require('./controller.js');
module.exports = function(app){
    app.put('/api/nuevoUsuario', controllerUsers.Guardar);
    app.post('/api/login', controllerUsers.Login);
    app.post('/api/modificaPersona', controllerUsers.Modificar); 
}
