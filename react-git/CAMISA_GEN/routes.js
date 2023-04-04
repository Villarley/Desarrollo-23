var controllerCamisa = require('./controllerCamisa.js');
var controllerUser = require('./controllerUser.js')
module.exports = function(app){
    app.put('/api/nuevaCamisa', controllerCamisa.Guardar);
    app.post('/api/modificaCamisa', controllerCamisa.Modificar);
    // app.delete('/api/eliminaCamisa', controllerCamisa.Eliminar);
    app.get('/api/todaslasCamisas', controllerCamisa.Seleccionartodos);
    app.post('/api/Camisasporid', controllerCamisa.Seleccionarporid);
    app.post('/api/actualizaLikes', controllerCamisa.ActualizarLikes);
    app.put('/api/nuevapersona', controllerUser.Guardar);
    app.post('/api/login', controllerUser.Login);
    
    app.post('/api/modificaPersona', controllerUser.Modificar); 
    // app.post('/api/Camisasporanno', controllerCamisa.Seleccionarpormessano);

    app.get('/Ingresarcamisa', 
    function(req, res){
        res.sendfile('index.html');
    });    
    app.get('/login', 
    function(req, res){
        res.sendfile('login.html');
    });    
    app.get('/login2', 
    function(req, res){
        res.sendfile('login2.html');
    });
    app.get('/css', 
    function(req, res){
        res.sendfile('./styles.css');
    });
    app.get('/javascript',
        function(req, res){
            res.sendfile('./camisafrontend.js');
        }
        );
        app.get('/javascript2',
        function(req, res){
            res.sendfile('./personafrontend.js');
        }
        );
    app.get('/css',
        function(req, res){
            res.sendfile('./style.css');
        }
        );
    app.get('/cami',
        function(req, res){
            res.sendfile('./cami.jpg');
        }
        );
    app.get('/css2',
        function(req, res){
            res.sendfile('./style2.css');
        }
        );
    let Persona = require('./user');
    app.get('/index1', function(req, res){
        Persona.find({email:req.body.email, password:req.body.password}, function(err,persona)
        {
            if(err){
                res.send(err);
            }
            else{
                if(persona.length > 0){
                    res.sendfile('./index.html')
                }
                else{
                    res.json("Error de seguridad");
                }
            }
        }
        );
    });
}