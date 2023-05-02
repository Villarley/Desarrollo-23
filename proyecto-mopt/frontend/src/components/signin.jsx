import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import './css/signup.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Container } from '@mui/material/Container';
import InputFile from "./components-mui/inputfile";
import Page from "./components-mui/menu"
import { Link } from "@mui/material";
import SignUp from "./signup";
class Signin extends Component {
  state = {
    signup: false,
    PERSONAL: {
        EMAIL: "",
        PASSWORD: "",
        },
    showPassword: false,
    logueado:false,
    persona: {
    _id: null,
      nombre: "",
      apellido: "",
      email: "",
      tipousuario: "",
      password: "",
      foto: "",
      citas: {
        fecha: "1",
        lugar: "1",
        tipodeprueba: "1",
        cedula: "1",
      },
    },
  };
  render() {
    console.log(this.state.logueado);
    console.log(this.state.signup);
    const handleClickShowPassword = () => this.setState({showPassword: !this.state.showPassword});
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
    //si no esta logueado y tampoco tiene una cuenta:
    if(!this.state.logueado && !this.state.signup){
      console.log("1")
    return(
      <React.Fragment>
        <div className="container">
        <Typography
              variant="h2"
              href=""
              className="h2"
              margin='-1vh'
            >
              Registrate
            </Typography>
        <TextField id="nombre" className="input" label="Nombre" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <TextField id="apellido" className="input" label="Apellido" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <TextField id="email" className="input" label="Email" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <TextField id="rol" className="input" label="Rol" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <FormControl sx={{ m: 1, width: '37ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            // aqui en el onchange se va actualizardatos para actualizarlos en tiempo real ya que react es declarativo
            onChange={(evt) => this.actualizardatos(evt)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="file-input">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            onChange={(evt) => this._onChange(evt)}
          />
          <label className="file-input__label" for="file-input">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Upload file</span>
          </label>
        </div>
        <Link href="#" onClick={() => {this.setState({signup: true,})}}>¿Ya tienes cuenta?</Link>
        <Button variant="contained" color="success" onClick={() => this.ingresarUsuario()}>
        Log
      </Button>

        </div>
      </React.Fragment>
    );
    }
    //si no esta logueado pero si tiene una cuenta entonces lo mande al login
    else if(!this.state.logueado && this.state.signup){
      console.log("2");
      return(
        <SignUp/>
      );
    }
  }
  //este es como un addeventlistener para la imagen para pasarla a base 64 
  _onChange = (e) => {
    var objetolocalcamisa = new Object();
    objetolocalcamisa = this.state.persona;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size < 2097152) {
        var reader = new FileReader();
        reader.onload = function (e) {
          objetolocalcamisa.foto = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);

        this.setState({
          persona: objetolocalcamisa,
        });
      }
    }
    console.log(this.state.persona, 'img');
  };
  actualizardatos(evt){
    console.log(evt.target.value);
    var objetolocalpersona = new Object();

        objetolocalpersona = this.state.persona;
        switch (evt.target.id) {
        case "email": {
            console.log(this.state.persona);
            objetolocalpersona.email = evt.target.value;
            console.log(objetolocalpersona.email);
            break;
        }
        case "outlined-adornment-password": {
            console.log(this.state.persona);
            objetolocalpersona.password = evt.target.value;
            console.log(objetolocalpersona.password);
            break;
        }
        case "rol": {
            console.log(this.state.persona);
            objetolocalpersona.tipousuario = evt.target.value;
            console.log(objetolocalpersona.tipousuario);
            break;
        }
        case "nombre": {
            console.log(this.state.persona);
            objetolocalpersona.nombre = evt.target.value;
            console.log(objetolocalpersona.nombre);
            break;
        }
        case "apellido": {
            console.log(this.state.persona);
            objetolocalpersona.apellido = evt.target.value;
            console.log(objetolocalpersona.apellido);
            break;
        }
        }
        this.setState({
        persona: objetolocalpersona,
        });
        console.log(this.state.persona, 'hola');
  }
  ingresarUsuario = () => {
    // With all properties
    var objetolocal = this.state.persona;
    console.log(objetolocal);
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
    // aqui se construyen todas las variables para poder pasarlas al fetch y que el request sea exitoso
    const Url = "http://localhost:8880/api/nuevoUsuario";
    const requestMetadata = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((personas) => {
        this.setState({
          persona: objetolocal,
        });
        console.log(this.state.persona)
        //si no da error entonces lo mandamos para que ya pueda hacer su login habitual
        if(this.state.persona != 'Error' || this.state.persona != ''){
             this.state.PERSONAL ={
                EMAIL: this.state.persona.email,
                PASSWORD: this.state.persona.password,
            }
            this.state.logueado = false;
            this.state.signup = true;
            // this.logIn();
        }

        // this.setState({combosactuales: recipes})
        // alert("Guardado");
      }); 
  };
}

export default Signin;