const Item = require('./userSchema.js');

exports.Guardar = (req, res) => {
  Item.create({
    NOMBRE: req.body.nombre,
    APELLIDO: req.body.apellido,
    EMAIL: req.body.email,
    TIPOUSUARIO: req.body.tipousuario,
    PASSWORD: req.body.password,
    FOTO: req.body.foto,
    CITAS: {
      FECHA: req.body.fecha,
      LUGAR: req.body.lugar,
      TIPODEPRUEBA: req.body.tipodeprueba,
      CEDULA: req.body.cedula
    }
  }, (err, item) => {
    if (err) {
      res.send(err);
    } else {
      Item.find((err, item) => {
        if (err) {
          res.send(err);
        }
        res.json(item);
      });
    }
  });
};

exports.Login = (req, res) => {
  console.log(req.body);
  Item.find({ EMAIL: req.body.EMAIL, PASSWORD: req.body.PASSWORD }, (err, persona) => {
    if (err) {
      res.send(err);
    } else {
      if (persona.length > 0) {
        res.json(persona);
      } else {
        res.json("Error");
      }
    }
  });
};

exports.Modificar = (req, res) => {
  Item.update(
    { _id: req.body.id },
    {
      $set: {
        NOMBRE: req.body.NOMBRE,
        APELLIDO: req.body.APELLIDO,
        EMAIL: req.body.EMAIL,
        TIPOUSUARIO: req.body.TIPOUSUARIO,
        PASSWORD: req.body.PASSWORD,
        FOTO: req.body.FOTO,
        CITAS: {
          FECHA: req.body.FECHA,
          LUGAR: req.body.LUGAR,
          TIPODEPRUEBA: req.body.TIPODEPRUEBA,
          CEDULA: req.body.CEDULA
        }
      }
    },
    (err, item) => {
      if (err) {
        res.send(err);
      } else {
        Item.find((err, item) => {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      }
    }
  );
};