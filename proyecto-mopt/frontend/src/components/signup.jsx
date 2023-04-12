import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import './css/signup.css';
class SignUp extends Component {
  state = {
    isRightPanelActive: false,
    persona: {
      nombre: "",
      apellido: "",
      email: "",
      tipousuario: "",
      password: "",
      foto: "",
      citas: {
        fecha: "",
        lugar: "",
        tipodeprueba: "",
        cedula: "",
      },
    },
  };

  handleSignInClick = () => {
    this.setState({ isRightPanelActive: false });
  };

  handleSignUpClick = () => {
    this.setState({ isRightPanelActive: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  render() {
    const { isRightPanelActive } = this.state;
    return (
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1" onSubmit={this.handleSubmit}>
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form action="#" className="form" id="form2" onSubmit={this.handleSubmit}>
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Password" className="input" />

            <a href="#" className="link">
              Forgot your password?
            </a>
            <button className="btn">Sign In</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn" onClick={this.handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp" onClick={this.handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;