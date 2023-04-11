    import React, { Component } from "react";
    import withReactContent from "sweetalert2-react-content";
    import Ingresarcamisa from "./Ingresarcamisa";
    import { withRouter } from "react-router-dom";
    import Swal from "sweetalert2";
    import "./css/style2.css";
    class Login extends Component {
    state = {
        PERSONA: {
        EMAIL: "",
        PASSWORD: "",
        },
        logueado: false
    };
    render() {
      if(this.state.logueado){
        return <Ingresarcamisa/>
      }
    else{

        return (
            <React.Fragment>
                <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                    <input
                        type="text"
                        name=""
                        id="email"
                        required=""
                        onChange={(evt) => this.Log(evt)}
                    ></input>
                    <label>Username</label>
                    </div>
                    <div className="user-box">
                    <input
                        type="password"
                        name=""
                        id="password"
                        required=""
                        onChange={(evt) => this.Log(evt)}
                    ></input>
                    <label>Password</label>
                    </div>
                    <button onClick={this.LogIn}>
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
            </React.Fragment>
            ); 
    }

        
    }
    Log(evt) {
        var objetolocalpersona = new Object();

        objetolocalpersona = this.state.PERSONA;
        switch (evt.target.id) {
        case "email": {
            console.log(this.state.PERSONA);
            objetolocalpersona.EMAIL = evt.target.value;
            console.log(objetolocalpersona.EMAIL);
            break;
        }
        case "password": {
            console.log(this.state.PERSONA);
            objetolocalpersona.PASSWORD = evt.target.value;
            console.log(objetolocalpersona.PASSWORD);
            break;
        }
        }
        this.setState({
        PERSONA: objetolocalpersona,
        });
        console.log(this.state.PERSONA);
    }
    LogIn = () => {
        alert("hola");
        var objetolocal = this.state.PERSONA;
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
            // if (persona != "Error") {
            this.setState({
                PERSONA: persona,
                logueado: true,
            });
            // }

            if (persona == "Error") {
            this.show(false);
            } else {
            this.show(true);
            }

            // this.setState({combosactuales: recipes})
        });
    };
    show = (Created) => {
        alert("hola");
        const { history } = this.props;
        if (Created) {
        Swal.fire({
            title: "Ingreso exitoso",
            icon: "success",
        }).then(() => {
            console.log(this.state.logueado);
            history.push("/Main");
        });
        } else {
        Swal.fire({
            title: "Datos incorrectos",
            icon: "warning",
        });
        }
    }
    }
    export default Login;
