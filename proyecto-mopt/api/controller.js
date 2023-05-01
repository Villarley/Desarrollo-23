const Item = require('./userSchema.js');

exports.Guardar = (req, res) => {
  console.log(req.body.citas);

  Item.create({
    NOMBRE: req.body.nombre,
    APELLIDO: req.body.apellido,
    EMAIL: req.body.email,
    TIPOUSUARIO: req.body.tipousuario,
    PASSWORD: req.body.password,
    FOTO: req.body.foto,
    CITAS: {
      FECHA: req.body.citas.fecha || "1",
      LUGAR: req.body.citas.lugar || "1",
      TIPODEPRUEBA: req.body.citas.tipodeprueba || "1",
      CEDULA: req.body.citas.cedula || "1"
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
  console.log(req.body.EMAIL);
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
  console.log(req.body);
  Item.update(
    { _id: req.body.id },
    {
      $set: {
        NOMBRE: req.body.nombre,
        APELLIDO: req.body.apellido,
        EMAIL: req.body.email,
        TIPOUSUARIO: req.body.tipousuario,
        PASSWORD: req.body.password,
        FOTO: req.body.foto,
        CITAS: {
          FECHA: req.body.citas.fecha || "1",
          LUGAR: req.body.citas.lugar || "1",
          TIPODEPRUEBA: req.body.citas.tipodeprueba || "1",
          CEDULA: req.body.citas.cedula || "1"
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