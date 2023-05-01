import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import SendIcon from "@mui/icons-material/Send";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SignUp from "../signup";
import Calendar from "./calendario";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../css/stylemenu.css";
import imgCar from "./car"
const MySwal = withReactContent(Swal);
const pages = ["Citas", "Calendario"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [citas, setCitas] = React.useState(false);
  const [calendario, setCalendario] = React.useState(true);
  const [logueado, setLogueado] = React.useState(props.logueado);
  const [persona, setPersona] = useState({
    id: JSON.parse(localStorage.getItem("personalc")).id,
    nombre: JSON.parse(localStorage.getItem("personalc")).nombre,
    apellido: JSON.parse(localStorage.getItem("personalc")).apellido,
    email: JSON.parse(localStorage.getItem("personalc")).email,
    tipousuario: JSON.parse(localStorage.getItem("personalc")).rol,
    password:JSON.parse(localStorage.getItem("personalc")).password,
    foto: JSON.parse(localStorage.getItem("personalc")).foto,
    citas: {
      fecha: JSON.parse(localStorage.getItem("personalc")).citas.fecha,
      cedula: JSON.parse(localStorage.getItem("personalc")).citas.cedula,
      tipodeprueba: JSON.parse(localStorage.getItem("personalc")).citas.tipodeprueba,
      lugar: JSON.parse(localStorage.getItem("personalc")).citas.lugar,
    },
  });
  const personalc ={
    id: props.id,
    nombre: props.nombre,
    apellido: props.apellido,
    email: props.email,
    tipousuario: props.rol,
    password: props.password,
    foto: props.foto,
    citas: {
      fecha: props.fecha||"1",
      cedula: props.cedula||"1",
      tipodeprueba: props.tipodeprueba||"1",
      lugar: props.lugar||"1",
    },
  }
  console.log(persona.id);
  localStorage.setItem('personalc', JSON.stringify(personalc));
  console.log(JSON.parse(localStorage.getItem("personalc")))
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  if (logueado) {
    if (citas) {
      return (
        <React.Fragment>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button
                    key="Citas"
                    onClick={() => {
                      setCitas(true);
                      setCalendario(false);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Citas
                  </Button>
                  <Button
                    key="Calendario"
                    onClick={() => {
                      setCalendario(true);
                      setCitas(false);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Calendario
                  </Button>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={persona.nombre} src={JSON.parse(localStorage.getItem("personalc")).foto} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <div className="containerh2">
            <h1>
              Hola {JSON.parse(localStorage.getItem("personalc")).nombre} , saca tu cita para la prueba
              <br /> teorica de manejo!
            </h1>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={(evt) => Show(evt)}
            >
              Saca tu cita
            </Button>
          </div>
          <div className="containerinputs"></div>
          <div className="car">
            
          </div>
        </React.Fragment>
      );
    } else if (calendario) {
      return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Citas"
                  onClick={() => {
                    setCitas(true);
                    setCalendario(false);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Citas
                </Button>
                <Button
                  key="Calendario"
                  onClick={() => {
                    setCalendario(true);
                    setCitas(false);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Calendario
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={persona.nombre} src={persona.foto} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
          <Calendar></Calendar>
        </AppBar>
      );
    }
  }
  function actualizardatos(evt) {
    console.log(evt.target.value);
    var objetolocalpersona = new Object();

    objetolocalpersona = persona.citas;
    console.log(persona.citas);
    switch (evt.target.id || evt.target.name) {
      case "date": {
        objetolocalpersona.fecha = evt.target.value;
        setPersona({citas,fecha: objetolocalpersona.fecha });
        console.log(persona.fecha);
        break;
      }
      case "cedula": {
        objetolocalpersona.cedula = evt.target.value;
        console.log(objetolocalpersona.cedula);
        setPersona({ citas,cedula: objetolocalpersona.cedula });
        break;
      }
      case "tipodeprueba": {
        objetolocalpersona.tipodeprueba = evt.target.value;
        console.log(objetolocalpersona.tipodeprueba);
        setPersona({ citas,tipodeprueba: objetolocalpersona.tipodeprueba });
        break;
      }
      case "lugar": {
        objetolocalpersona.lugar = evt.target.value;
        console.log(objetolocalpersona.lugar);
        setPersona({ citas,lugar: objetolocalpersona.lugar });
        break;
      }
    }
    console.log(objetolocalpersona);
    setPersona({ citas: objetolocalpersona });
  }
  function Show(evt) {
    MySwal.fire({
      html: (
        <div className="containerswal">
          <input
            type="date"
            name=""
            id="date"
            onChange={(evt) => actualizardatos(evt)}
          />
          <TextField
            id="cedula"
            className="input"
            label="cedula"
            variant="outlined"
            onChange={(evt) => actualizardatos(evt)}
          />
          <Select
            id="lugar"
            name="lugar"
            defaultValue=""
            label="Lugar"
            displayEmpty
            onChange={(evt) => actualizardatos(evt)}
          >
            <MenuItem value="" disabled>
              <em>Lugar</em>
            </MenuItem>
            <MenuItem value={"Paso ancho"}>Paso Ancho</MenuItem>
            <MenuItem value={"Alajuela"}>Alajuela</MenuItem>
            <MenuItem value={"Perez Zeledon"}>Perez Zeledon</MenuItem>
          </Select>
          <Select
            defaultValue=""
            name="tipodeprueba"
            id="tipodeprueba"
            label="Tipo de licencia"
            displayEmpty
            placeholder="Tipo de licencia"
            onChange={(evt) => actualizardatos(evt)}
          >
            <MenuItem value="" disabled>
              <em>Tipo de licencia</em>
            </MenuItem>
            <MenuItem value={"A"}><em>A</em> </MenuItem>
            <MenuItem value={"B"}><em>B</em> </MenuItem>
            <MenuItem value={"C"}><em>C</em> </MenuItem>
          </Select>
          <Button
            variant="contained"
            color="success"
            onClick={() => guardarcita()}
          >
            Log
          </Button>
        </div>
      ),
      customClass: {
        container: "my-modal-container",
        popup: "my-modal-popup",
        content: "my-modal-content",
        closeButton: "my-modal-close-button",
      },
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: false,
    });
  }
  function guardarcita(){
    console.log(persona)
    var objetolocal = persona;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
    const Url = "http://localhost:8880/api/modificaPersona";
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((personas) => {
        setPersona({
          persona: objetolocal,
        });
        console.log(persona);

        // this.setState({combosactuales: recipes})
        // alert("Guardado");
      });
  }
}
export default ResponsiveAppBar;
