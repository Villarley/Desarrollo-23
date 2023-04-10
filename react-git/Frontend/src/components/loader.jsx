import React, { Component } from "react";
import "./css/loader.css"; // Importa el archivo CSS
class Loader extends Component {
  render() {
    return (
        <React.Fragment>
      <div className="content"> {/* Usa className en lugar de class */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
        </React.Fragment>
    );
  }
}
export default Loader;