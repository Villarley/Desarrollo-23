import React, { Component } from "react";
import ReactDOMServer from 'react-dom/server';
import Swal from "sweetalert2";
import Style from "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);
class Form extends Component {
    state ={
        CAMISA: {

            NOMBRE: '',
            COLOR1: '',
            COLOR2: '',
            COLOR3: '',
            LIKES: 0,
            IMAGEN: ''
        },
        camisasactuales : null,
    }
    componentDidMount() {
      this.obtenercamisa()
    }

      render() {
        if (this.state.camisasactuales == null) return "cargando"

          return (<React.Fragment>
                  <div className="BigContainer">
        <div className="container1">

          <div className="container" id="container">
            {null}
        </div>
                  <div className="btn-add"><button className="submit-task" id="submit-btn" onClick={(evt) => this.Show(evt)}></button></div>
                  <div className="btn-add"><button className="submit-task" id="submit-btn" onClick={(evt) => this.obtenercamisa(evt)}></button></div>
        </div>
        </div>
        
          </React.Fragment>)
    }
    Show(evt){
        MySwal.fire({
            html: (
                <React.Fragment>
                  <div className="parent animate__fadeInBottomRight">
                    <div className="group child">
                      <input type="text" name="" id="Nombre" placeholder="Nombre" onChange={(evt) => this.actualizardatosguardar(evt)} />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                    </div>
            
                    <div className="group child">
                      <input type="text" className="child" name="" id="Color1" placeholder="Color1" onChange={(evt) => this.actualizardatosguardar(evt)} />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                    </div>
            
                    <div className="group child">
                      <input type="text" className="child" name="" id="Color2" placeholder="Color2" onChange={(evt) => this.actualizardatosguardar(evt)} />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                    </div>
            
                    <div className="group child">
                      <input type="text" className="child" name="" id="Color3" placeholder="Color3" onChange={(evt) => this.actualizardatosguardar(evt)} />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                    </div>
            
                    <div className="upload-btn-wrapper child2">
                      <button className="btn">Seleccionar imagen</button>
                      <input type="file" name="" id="Imagen" onChange={evt => this._onChange(evt)} />
                    </div>
                  </div>
            
                  <button className="bot" style={{ marginTop: '1vh', margin: 'auto' }} onClick={this.guardarcamisa}>
                    Guardar camisa
                  </button>
                </React.Fragment>
              ),
              focusConfirm: false,
              showConfirmButton: false,
              showCloseButton: false
        });
    }

    _onChange = (e) => {
        var objetolocalcamisa = new Object();
        objetolocalcamisa = this.state.CAMISA
        if(e.target.files && e.target.files[0]){
            if(e.target.files[0].size < 2097152){
                var reader = new FileReader();
                reader.onload = function(e){
                    objetolocalcamisa.IMAGEN = e.target.result
                };
                reader.readAsDataURL(e.target.files[0]);

                    this.setState({
                        CAMISA: objetolocalcamisa
                    });
            }
        }
        console.log(e);
    }
    actualizardatosguardar(evt)
    {

        console.log("Hola")
        var objetolocalcamisa= new Object();
       
        objetolocalcamisa= this.state.CAMISA
        switch(evt.target.id)
            {
                case "Nombre":
                    {
                        console.log(this.state.CAMISA)
                       objetolocalcamisa.NOMBRE= evt.target.value;
                       console.log(objetolocalcamisa.NOMBRE);
                        break;
                    }
                case "Color1":
                    {
                        console.log(this.state.CAMISA)
                        objetolocalcamisa.APELLIDO= evt.target.value;
                        console.log(objetolocalcamisa.APELLIDO);
                        break;
                    } 
                case "Color2":
                    {
                        console.log(this.state.CAMISA)
                        objetolocalcamisa.EMAIL = evt.target.value;
                        console.log(objetolocalcamisa.EMAIL);
                        break;
                    }  
                case "Color3":
                    {
                        console.log(this.state.CAMISA)
                        objetolocalcamisa.TIPOUSUARIO = evt.target.value;
                        console.log(objetolocalcamisa.TIPOUSUARIO);
                        break;
                    }                     
                   
            }
       
                               this.setState({
          CAMISA: objetolocalcamisa
        })
       
       
    }
    guardarcamisa = () => {
        // With all properties
       var objetolocal = this.state.CAMISA
       // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
       const Url = 'http://localhost:8880/api/nuevaCamisa';
      const requestMetadata = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetolocal)
        };
    
        fetch(Url, requestMetadata)
            .then(res => res.json())
            .then(camisa => {
            this.setState({
          camisa: camisa
        });
                           
               console.log(camisa)
           
          // this.setState({combosactuales: recipes})
            alert("Guardado");
            });
    }
    obtenercamisa = () => {
        // With all properties
       var objetolocal = this.state.CAMISA
       // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
       const Url = 'http://localhost:8880/api/todaslasCamisas';
      const requestMetadata = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };
    
        fetch(Url, requestMetadata)
            .then(res => res.json())
            .then(camisas => {
            this.setState({
          camisasactuales: camisas
        });
                           
              //  console.log(camisa)
              //  return camisa;
           
          // this.setState({combosactuales: recipes})
            alert("Guardado");
            });
    }
//     renderPosts(){
// ``        // this.setState.camisasactuales = this.obtenercamisa();
//         // console.log(camisasactuales);``
//     }
}
    



export default Form