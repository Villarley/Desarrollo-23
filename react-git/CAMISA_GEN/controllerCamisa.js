let Item = require('./camisa.js');

module.exports.Guardar = (req, res) => {
    Item.create({
            NOMBRE: req.body.NOMBRE,
            COLOR1: req.body.COLOR1,
            COLOR2: req.body.COLOR2,
            COLOR3: req.body.COLOR3,
            LIKES: req.body.LIKES,
            IMAGEN: req.body.IMAGEN
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
}; // Agregar esta llave

exports.Modificar = function(req, res) {
    Item.update({ _id: req.body.id }, {
            $set: {
                NOMBRE: req.body.NOMBRE,
                COLOR1: req.body.COLOR1,
                COLOR2: req.body.COLOR2,
                COLOR3: req.body.COLOR3,
                LIKES: req.body.LIKES,
                IMAGEN: req.body.IMAGEN
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

exports.Seleccionartodos = function(req, res) {
    Item.find(function(err, item) {
        if (err) {
            res.send(err);
        } else {

            res.json(item);
        }
    });
};
    exports.Seleccionarporid = function(req,res)
    {
        Item.find({_id : req.body.id}, function(err, item){
            if(err){
                res.send(err);
            }else{
                res.json(item);
            }
        });
    };
exports.ActualizarLikes = function(req, res) {
    var updatedLikes = req.body.LIKES || 0  ;
    console.log(updatedLikes);
    Item.update({ _id: req.body.id }, { $set: { LIKES: updatedLikes } }, function(err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find({_id : req.body.id}, function(err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      }
    });
  };