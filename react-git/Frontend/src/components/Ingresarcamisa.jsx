import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import StyleSwal from "./css/styleSwal.css";
import Style from "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from './loader';
import withReactContent from "sweetalert2-react-content";
import Filadecamisas from "./filadecamisas";
const MySwal = withReactContent(Swal);
class Form extends Component {
  state = {
    CAMISA: {
      NOMBRE: "",
      COLOR1: "",
      COLOR2: "",
      COLOR3: "",
      LIKES: 0,
      IMAGEN: "",
    },
    camisasactuales: null,
  };
  componentDidMount() {
    this.obtenercamisa();
  }

  render() {
    if (this.state.camisasactuales == null) return <Loader/>;
    else console.log(this.state.camisasactuales);
    return (
      <React.Fragment>
        <div className="BigContainer">
          <div className="container1">
            <div className="container" id="container">
              {this.state.camisasactuales.map((op) => (
                <Filadecamisas
                  nombre={op.NOMBRE}
                  imagen={op.IMAGEN}
                  color1={op.COLOR1}
                  color2={op.COLOR2}
                  color3={op.COLOR3}
                  likes={op.LIKES}
                  id={op._id}
                  eliminarcupon={this.eliminarcupon}
                  productos={op.productos}
                />
              ))}
            </div>
            <div className="btn-add">
              <button
                className="submit-task"
                id="submit-btn"
                onClick={(evt) => this.Show(evt)}
              ></button>
            </div>
            {/* <div className="btn-add"><button className="submit-task" id="submit-btn" onClick={(evt) => this.obtenercamisa(evt)}></button></div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
  Show(evt) {
    MySwal.fire({
      html: (
        <div className="my-modal">
          <div className="my-modal-header">Ingrese los datos</div>
          <div className="my-modal-content">
            <div className="my-modal-input-group">
              <input
                id="Nombre"
                type="text"
                className="my-modal-input"
                placeholder="Nombre"
                onChange={(evt) => this.actualizardatosguardar(evt)}
              />
            </div>

            <div className="my-modal-input-group">
              <input
                id="Color1"
                type="text"
                className="my-modal-input"
                placeholder="Color 1"
                onChange={(evt) => this.actualizardatosguardar(evt)}
              />
            </div>

            <div className="my-modal-input-group">
              <input
                id="Color2"
                type="text"
                className="my-modal-input"
                placeholder="Color 2"
                onChange={(evt) => this.actualizardatosguardar(evt)}
              />
            </div>

            <div className="my-modal-input-group">
              <input
                id="Color3"
                type="text"
                className="my-modal-input"
                placeholder="Color 3"
                onChange={(evt) => this.actualizardatosguardar(evt)}
              />
            </div>

            <div className="upload-btn-wrapper">
              <button className="my-btn my-btn-secondary">
                Seleccionar imagen
              </button>
              <input
                type="file"
                name=""
                id="Imagen"
                onChange={(evt) => this._onChange(evt)}
              />
            </div>
          </div>

          <button className="my-btn my-btn-primary" onClick={this.guardarcamisa}>
            Guardar camisa
          </button>
        </div>
      ),
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: false,
      customClass: {
        container: "my-modal-container",
        popup: "my-modal-popup",
        content: "my-modal-content",
        closeButton: "my-modal-close-button",
      },
    });
  }

  _onChange = (e) => {
    var objetolocalcamisa = new Object();
    objetolocalcamisa = this.state.CAMISA;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size < 2097152) {
        var reader = new FileReader();
        reader.onload = function (e) {
          objetolocalcamisa.IMAGEN = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);

        this.setState({
          CAMISA: objetolocalcamisa,
        });
      }
    }
    console.log(e);
  };
  actualizardatosguardar(evt) {
    var objetolocalcamisa = new Object();

    objetolocalcamisa = this.state.CAMISA;
    console.log(objetolocalcamisa);
    switch (evt.target.id) {
      case "Nombre": {
        console.log(evt.target.value);
        console.log(this.state.CAMISA);
        objetolocalcamisa.NOMBRE = evt.target.value;
        console.log(objetolocalcamisa.NOMBRE);
        break;
      }
      case "Color1": {
        console.log(this.state.CAMISA);
        objetolocalcamisa.COLOR1 = evt.target.value;
        console.log(objetolocalcamisa.COLOR1);
        break;
      }
      case "Color2": {
        console.log(this.state.CAMISA);
        objetolocalcamisa.COLOR2 = evt.target.value;
        console.log(objetolocalcamisa.COLOR2);
        break;
      }
      case "Color3": {
        console.log(this.state.CAMISA);
        objetolocalcamisa.COLOR3 = evt.target.value;
        console.log(objetolocalcamisa.COLOR3);
        break;
      }
    }

    this.setState({
      CAMISA: objetolocalcamisa,
    });
  }
  guardarcamisa = () => {
    // With all properties
    var objetolocal = this.state.CAMISA;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
    const Url = "http://localhost:8880/api/nuevaCamisa";
    const requestMetadata = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((camisa) => {
        this.setState({
          camisa: camisa,
        });

        console.log(camisa);

        // this.setState({combosactuales: recipes})
        // alert("Guardado");
      });
  };
  obtenercamisa = () => {
    // With all properties
    var objetolocal = this.state.CAMISA;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
    const Url = "http://localhost:8880/api/todaslasCamisas";
    const requestMetadata = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((camisas) => {
        this.setState({
          camisasactuales: camisas,
        });

        //  console.log(camisa)
        //  return camisa;

        // this.setState({combosactuales: recipes})
        // alert("Guardado");
      });
  };
  //     renderPosts(){
  // ``        // this.setState.camisasactuales = this.obtenercamisa();
  //         // console.log(camisasactuales);``
  //     }
}

export default Form;
