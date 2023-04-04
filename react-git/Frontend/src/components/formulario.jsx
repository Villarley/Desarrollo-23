import React, { Component } from "react";
import Style from "./css/style2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class Formulario extends Component{
    state = {
        PERSONA: {
            NOMBRE: '',
            APELLIDO: '',
            EMAIL: '',
            TIPOUSUARIO: '',
            PASSWORD: '',
            FOTO: ''
        }
    }
    render(){
        const inputStyleimg = {border_radius: '50%', cursor: 'pointer', width: '100px'}
        const oculta = {visibility: 'collapse'}
        const muestra = {visibility: 'visible'}
        return(
        <React.Fragment>
                    <div className="containerInputs">
            <div className="login-box">
                <h2>Sign in</h2>
                <form>
                  <div className="user-box">
                    <input type="text" name="" id="nombre" required="" onChange = {(evt) => this.actualizardatosguardar(evt)}/>
                    <label>Nombre</label>
                  </div>
                  <div className="user-box">
                    <input type="text" name="" id="apellido" required="" onChange = {(evt) => this.actualizardatosguardar(evt)}/>
                    <label>Apellidos</label>
                  </div>                  
                  <div className="user-box">
                    <input type="text" name="" id="email" required="" onChange = {(evt) => this.actualizardatosguardar(evt)}/>
                    <label>Email</label>
                  </div>
                  <div className="user-box">
                    <input type="text" name="" id="rol" required="" onChange = {(evt) => this.actualizardatosguardar(evt)}/>
                    <label>Rol</label>
                  </div>
                  <div className="user-box">
                    <input type="password" name="" id="password" required="" onChange = {(evt) => this.actualizardatosguardar(evt)}/>
                    <label>Password</label>
                  </div>
                  <div className="user-box">
                    <input type="file" name="" id="foto" required="" onChange = {evt => this._onChange(evt)}/>
                  </div>
                  <button onClick={this.guardarpersona}>            
                    <a href="#">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a>
                </button>
                </form>
              </div>
        </div>
        </React.Fragment>);
    }
    _onChange = (e) => {
        var objetolocalpersona = new Object();
        objetolocalpersona = this.state.PERSONA
        if(e.target.files && e.target.files[0]){
            if(e.target.files[0].size < 2097152){
                var reader = new FileReader();
                reader.onload = function(e){
                    objetolocalpersona.FOTO = e.target.result
                };
                reader.readAsDataURL(e.target.files[0]);

                    this.setState({
                        PERSONA: objetolocalpersona
                    });
            }
        }
        console.log(e);
    }
    actualizardatosguardar(evt)
    {
        var objetolocalpersona= new Object();
       
        objetolocalpersona= this.state.PERSONA
        switch(evt.target.id)
            {
                case "nombre":
                    {
                        console.log(this.state.PERSONA)
                       objetolocalpersona.NOMBRE= evt.target.value;
                       console.log(objetolocalpersona.NOMBRE);
                        break;
                    }
                case "apellido":
                    {
                        console.log(this.state.PERSONA)
                        objetolocalpersona.APELLIDO= evt.target.value;
                        console.log(objetolocalpersona.APELLIDO);
                        break;
                    } 
                case "email":
                    {
                        console.log(this.state.PERSONA)
                        objetolocalpersona.EMAIL = evt.target.value;
                        console.log(objetolocalpersona.EMAIL);
                        break;
                    }  
                case "rol":
                    {
                        console.log(this.state.PERSONA)
                        objetolocalpersona.TIPOUSUARIO = evt.target.value;
                        console.log(objetolocalpersona.TIPOUSUARIO);
                        break;
                    }  
                case "password":
                    {
                        console.log(this.state.PERSONA)
                        objetolocalpersona.PASSWORD = evt.target.value;
                        console.log(objetolocalpersona.PASSWORD);
                        break;
                    }                      
                   
            }
       
                               this.setState({
          PERSONA: objetolocalpersona
        })
       
       
    }
    guardarpersona = () => {
        // With all properties
       var objetolocal = this.state.PERSONA
       // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
       const Url = 'http://localhost:8880/api/nuevapersona';
      const requestMetadata = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetolocal)
        };
    
        fetch(Url, requestMetadata)
            .then(res => res.json())
            .then(personas => {
            this.setState({
          personas: personas
        });
                           
               console.log(personas)
           
          // this.setState({combosactuales: recipes})
            alert("Guardado");
            });
    }
}
export default Formulario