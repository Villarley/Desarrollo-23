import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from './components/formulario';
import Form from './components/Ingresarcamisa';
import { SweetAlert2 } from 'sweetalert2-react-content';
import LogIn from './components/login';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route exact path="/Main" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
