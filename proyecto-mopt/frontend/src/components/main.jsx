import React, { Component } from "react";
import Menu from "./components-mui/menu"
import ReactDOM from 'react-dom/client';
import SignUp from "./signup";
class Main extends Component {
    render(){
        return (
            <React.Fragment>
                <SignUp/>
            </React.Fragment>
        );
    }
}
export default Main;