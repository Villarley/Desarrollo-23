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
class SignUp extends Component {
  state = {
    snackbar: false,
    PERSONA: {
      EMAIL: "",
      PASSWORD: "",
      },
    showPassword: false,
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
    if(!this.state.logueado){
    return(
      <React.Fragment>
        <div className="container">
        <Typography
              variant="h2"
              href=""
              className="h2"
              margin='-1vh'
            >
              Inicia sesion
            </Typography>
        <TextField id="email" className="input" label="Email" variant="outlined" onChange={(evt) => this.actualizardatos(evt)}/>
        <FormControl sx={{ m: 1, width: '37ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
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
        <Button variant="contained" color="success" onClick={() => this.logIn()}>
        Log
      </Button>

        </div>
      </React.Fragment>
    );
    }
  }
  actualizardatos(evt){
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
        console.log(this.state.PERSONA, 'hola');
  }
  logIn(PERSONA){
    var objetolocal = PERSONA;
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
            this.setState({
                PERSONA: persona,
            });
            // }

            if (PERSONA === "Error") {
            this.setState({snackbar: true});
            } else {
            }

            // this.setState({combosactuales: recipes})
        });
    };
}

export default SignUp;