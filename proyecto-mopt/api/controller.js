// Se importa el modelo de la colección.
const Item = require('./userSchema.js');

// Función para guardar un nuevo documento en la colección 'Item'.
exports.Guardar = (req, res) => {
  console.log(req.body); // Se imprime en consola el cuerpo de la solicitud.

  // Se crea un nuevo documento con los datos recibidos en el cuerpo de la solicitud.
  Item.create({
    NOMBRE: req.body.nombre,
    APELLIDO: req.body.apellido,
    EMAIL: req.body.email,
    TIPOUSUARIO: req.body.tipousuario || 'admin',
    PASSWORD: req.body.password,
    FOTO: req.body.foto,
    CITAS: {
      FECHA: req.body.citas.fecha || "1", // Valores por defecto en caso de ser undefined.
      LUGAR: req.body.citas.lugar || "1",
      TIPODEPRUEBA: req.body.citas.tipodeprueba || "1",
      CEDULA: req.body.citas.cedula || "1"
    }
  }, (err, item) => {
    if (err) { // Si ocurre un error, se envía como respuesta.
      res.send(err);
    } else { // De lo contrario, se buscan todos los documentos de la colección y se envían al cliente como respuesta en formato JSON.
      Item.find((err, item) => {
        if (err) {
          res.send(err);
        }
        res.json(item);
      });
    }
  });
};

// Función para buscar un documento en la colección 'Item' que coincida con el correo electrónico y la contraseña recibidos en la solicitud.
exports.Login = (req, res) => {
  console.log(req.body.EMAIL); // Se imprime en consola el valor de la propiedad EMAIL del cuerpo de la solicitud.
  
  // Búsqueda de documentos que coincidan con los valores recibidos.
  Item.find({ EMAIL: req.body.EMAIL, PASSWORD: req.body.PASSWORD }, (err, persona) => {
    if (err) { // Si ocurre un error, se envía como respuesta.
      res.send(err);
    } else {
      if (persona.length > 0) { // Si se encuentra algún documento, se envía como respuesta al cliente en formato JSON.
        res.json(persona);
      } else { // De lo contrario, se envía "Error" como respuesta.
        res.json("Error");
      }
    }
  });
};

// Función para modificar un documento existente en la colección 'Item'.
exports.Modificar = (req, res) => {
  console.log(req.body); // Se imprime en consola el cuerpo de la solicitud.

  // Actualización del documento correspondiente, a través de su propiedad '_id'.
  Item.update(
    { _id: req.body.id },
    {
      $set: { // Nuevos valores para las propiedades del documento.
        NOMBRE: req.body.nombre,
        APELLIDO: req.body.apellido,
        EMAIL: req.body.email,
        TIPOUSUARIO: req.body.tipousuario,
        PASSWORD: req.body.password,
        FOTO: req.body.foto,
        CITAS: {
          FECHA: req.body.citas.fecha || "1", // Valores por defecto en caso de ser undefined.
          LUGAR: req.body.citas.lugar || "1",
          TIPODEPRUEBA: req.body.citas.tipodeprueba || "1",
          CEDULA: req.body.citas.cedula || "1"
        }
      }
    },
    (err, item) => {
      if (err) { // Si ocurre un error, se envía como respuesta.
        res.send(err);
      } else { // De lo contrario, se buscan todos los documentos de la colección y se envían al cliente como respuesta en formato JSON.
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
