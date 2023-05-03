import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import "./css/signup.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Container } from "@mui/material/Container";
import Menu from "./components-mui/menu";
import Link from '@mui/material/Link';
import Signin from './signin';
class SignUp extends Component {
  state = {
    signin: false,
    PERSONA: {
      EMAIL: "",
      PASSWORD: "",
    },
    showPassword: false,
    logueado: false,
    persona: {
      _id: "",
      NOMBRE: "",
      APELLIDO: "",
      EMAIL: "",
      TIPOUSUARIO: "",
      PASSWORD: "",
      FOTO: "",
      CITAS: {
        FECHA: "1",
        LUGAR: "1",
        TIPODEPRUEBA: "1",
        CEDULA: "1",
      },
    },
  };

  render() {
    //cambia el state del password para mostrarlo como tipo texto o como password
    const handleClickShowPassword = () =>
      this.setState({ showPassword: !this.state.showPassword });
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    // if(this.state.snackbar){
    //   return (
    //     <React.Fragment>

    //   <Alert severity="error">This is an error message!</Alert>
    //   <Alert severity="warning">This is a warning message!</Alert>
    //   <Alert severity="info">This is an information message!</Alert>
    //   <Alert severity="success">This is a success message!</Alert>
    //     </React.Fragment>
    //   )
    // }
    // si no esta logueado pero tiene cuenta
    if (!this.state.logueado && !this.state.signin) {
      return (
        <React.Fragment>
          <div className="container">
            <Typography variant="h2" href="" className="h2" margin="-1vh">
              Inicia sesion
            </Typography>
            <TextField
              id="email"
              className="input"
              label="Email"
              variant="outlined"
              onChange={(evt) => this.actualizardatos(evt)}
            />
            <FormControl sx={{ m: 1, width: "37ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                onChange={(evt) => this.actualizardatos(evt)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Link href="#" onClick={ () => {this.setState({signin: true,})}}>¿No tienes cuenta?</Link>
            <Button
              variant="contained"
              color="success"
              onClick={() => this.logIn()}
            >
              Log
            </Button>
          </div>  
        </React.Fragment>
      );
      //si no esta lofueado pero no tiene cuenta
    } else if(!this.state.logueado && this.state.signin){
      return(
        <Signin/>
      );
    }
    //si esta logueado lo manda al menu.jsx que es el index
     else{
      console.log(this.state.persona);
      return (
        <React.Fragment>
          <Menu
            logueado={this.state.logueado}
            email={this.state.persona.EMAIL}
            nombre={this.state.persona.NOMBRE}
            foto={this.state.persona.FOTO}
            apellido={this.state.persona.APELLIDO}
            rol={this.state.persona.TIPOUSUARIO}
            password={this.state.persona.PASSWORD}
              fecha = {this.state.persona.CITAS.FECHA}
            lugar = {this.state.persona.CITAS.LUGAR}
            tipodeprueba = {this.state.persona.CITAS.TIPODEPRUEBA}
            cedula = {this.state.persona.CITAS.CEDULA}
            id={this.state.persona._id}
          />
        </React.Fragment>
      );
    }
  }
  actualizardatos(evt) {
    console.log(evt.target.value);
    var objetolocalpersona = new Object();

    objetolocalpersona = this.state.PERSONA;
    switch (evt.target.id) {
      case "email": {
        console.log(this.state.PERSONA);
        objetolocalpersona.EMAIL = evt.target.value;
        console.log(objetolocalpersona.EMAIL);
        break;
      }
      case "outlined-adornment-password": {
        console.log(this.state.PERSONA);
        objetolocalpersona.PASSWORD = evt.target.value;
        console.log(objetolocalpersona.PASSWORD);
        break;
      }
    }
    this.setState({
      PERSONA: objetolocalpersona,
    });

  }
  logIn() {
    //aqui se arma todo el esqueleto para mandar el request
    var objetolocal = this.state.PERSONA;
    console.log(objetolocal);
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
    const Url = "http://localhost:8880/api/login";
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((persona) => {
        console.log(persona);
        // if (persona != "Error") {
        this.state.persona = persona[0];
        console.log(this.state.persona);
        // }

        if (this.state.PERSONA === "Error") {
          window. history. back(); 
        } else {
          this.setState({ logueado: true });
        }

        // this.setState({combosactuales: recipes})
      });
  }
}

export default SignUp;
