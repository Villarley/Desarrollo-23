import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import './css/signup.css';
class SignUp extends Component {
  state = {
    persona: {
      nombre: "",
      apellido: "",
      email: "",
      tipousuario: "",
      password: "",
      foto: "",
      citas: {
        fecha: "",
        lugar: "",
        tipodeprueba: "",
        cedula: "",
      },
    },
  };


  render() {
    return(
      <React.Fragment></React.Fragment>
    );
  }
}

export default SignUp;