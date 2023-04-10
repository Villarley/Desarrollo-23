import React, { Component } from "react";
import loadercss from "./css/loader.css"
class loader extends Component {
  render() {
    return (
      <div class="content">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    );
  }
}
export default loader;
