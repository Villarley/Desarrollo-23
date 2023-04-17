import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import './css/signup.css';
import { Container } from '@mui/material/Container';
class SignUp extends Component {
  state = {
    logueado:false,
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
    if(!this.state.logueado){
    return(
      <React.Fragment>
        <div className="container">
        <Typography
              variant="h2"
              href=""
              className="h2"
            >
              LOGO
            </Typography>
        <TextField id="Nombre" className="input" label="Outlined" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <TextField id="Nombre" className="input" label="Outlined" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <Button variant="contained" color="success">
        Success
      </Button>
        </div>
      </React.Fragment>
    );
    }
  }
  actualizardatos(evt){
    console.log(evt.target.value);
  }
}

export default SignUp;