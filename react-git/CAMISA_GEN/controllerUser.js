let Item = require('./user.js');

module.exports.Guardar = (req, res) => {
    Item.create({
        NOMBRE: req.body.NOMBRE,
        APELLIDO: req.body.APELLIDO,
        EMAIL: req.body.EMAIL,
            TIPOUSUARIO: req.body.TIPOUSUARIO,
            PASSWORD: req.body.PASSWORD,
         FOTO: req.body.FOTO
    },
    function(err, item) {
        if (err) {
            res.send(err);
        } else {
            Item.find(function(err, item) {
                if (err)
                    res.send(err);
                res.json(item);
            });
        }
    }
    );
};
exports.Login = (req, res) => {
    Item.find({EMAIL:req.body.EMAIL, PASSWORD:req.body.PASSWORD}, function(err, persona){
        if(err)
        {
            res.send(err);
        }
        else{
            if(persona.length > 0){
                res.json(persona);
            }
            else{
                res.json("Error");
            }
        }
    });
};
module.exports.Modificar = function(req, res) {
    Item.update({ _id: req.body.id }, {
            $set: {
                NOMBRE: req.body.NOMBRE,
                APELLIDO: req.body.APELLIDO,
                EMAIL: req.body.EMAIL,
                    TIPOUSUARIO: req.body.TIPOUSUARIO,
                    PASSWORD: req.body.PASSWORD,
                 FOTO: req.body.FOTO
            }
        },
        function(err, item) {
            if (err) {
                res.send(err);
            } else {
                Item.find(function(err, item) {
                    if (err)
                        res.send(err);
                    res.json(item);
                });
            }
        });
};