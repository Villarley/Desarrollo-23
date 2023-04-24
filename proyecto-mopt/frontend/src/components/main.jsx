import React, { Component } from "react";
import Menu from "./components-mui/menu"
import ReactDOM from 'react-dom/client';
import SignUp from "./signup";
import Signin from "./signin"
class Main extends Component {
    render(){
        return (
            <React.Fragment>
                <Signin/>
            </React.Fragment>
        );
    }
}
export default Main;