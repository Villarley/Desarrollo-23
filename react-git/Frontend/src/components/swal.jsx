import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class swal extends Component {
    render(){
        return (<React.Fragment>
            
            <div className="parent animate__fadeInBottomRight">
            <div className="group child" ><input type="text"  name="" id="Nombre" placeholder="Nombre" onChange = {(evt) => this.actualizardatosguardar(evt)} /><span className="highlight"></span><span className="bar"></span></div>
            
            <div className="group child"><input type="text" className="child" name="" id="Color1" placeholder="Color1" onChange = {(evt) => this.actualizardatosguardar(evt)} /><span className="highlight"></span><span className="bar"></span></div>
            <div className="group child" ><input type="text" className="child" name="" id="Color2" placeholder="Color2" onChange = {(evt) => this.actualizardatosguardar(evt)}/><span className="highlight"></span><span className="bar"></span></div>
            <div className="group child" ><input type="text" className="child" name="" id="Color3" placeholder="Color3" onChange = {(evt) => this.actualizardatosguardar(evt)}/><span className="highlight"></span><span className="bar"></span></div>
                <div className="upload-btn-wrapper child2"><button className="btn">Seleccionar imagen</button><input type="file"  name="" id="Imagen" onChange = "{evt => this._onChange(evt)}"/></div>
              </div>
              <button className="bot" style="margin-top: 1vh; margin: auto;" onClick="Guardar()">Guardar camisa</button>
        </React.Fragment>)
    }
}
export default swal