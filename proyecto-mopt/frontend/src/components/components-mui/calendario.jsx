import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../css/calendar.css";
import Link from "@mui/material/Link";

function Calenddar(props) {
  const [value, onChange] = useState(new Date()); // Estado para el valor del calendario
  const [selectedAppointments, setSelectedAppointments] = useState({}); // Estado para citas seleccionadas
  const appointments = JSON.parse(localStorage.getItem("personalc")); // Obtiene citas desde localStorage
  console.log(value);
  const appointmentDay = new Date(appointments.citas.fecha); // Fecha de la cita obtenida de localStorage
  console.log(appointmentDay);
  console.log(props);
  console.log(appointmentDay.toDateString() == value.toDateString());
  function handleClick() {
    props.setcitas(); // Manejador de evento para el enlace "¿No tienes cuenta?"
  }
  return (
    <div className="react-calendar-con">
      <div className="calendar-wrapper">
        <Calendar
          onChange={onChange}
          value={value}
          className="react-calendar"
          prev2Label={null}
          next2Label={null}
        ></Calendar>
        <div className="appointments">
          {/* Compara si la fecha actual es la misma que la fecha de la cita */}
          {appointmentDay.toDateString() == value.toDateString() ? (
            <div className="containerr">
              <p>Tienes una cita!</p>
              <p>Es el dia: {appointments.citas.fecha}</p>
              <p>Su cita es en la sede de {appointments.citas.lugar}:</p>
              {appointments.citas.lugar == "Paso ancho" ? (
                <a
                  href="https://embed.waze.com/iframe?zoom=16&lat=9.919185&lon=-84.081333&ct=livemap"
                  target="_blank"
                >
                  <iframe
                    src="https://embed.waze.com/iframe?zoom=16&lat=9.919185&lon=-84.081333&ct=livemap&pin=1"
                    width="600"
                    height="450"
                    allowfullscreen
                  ></iframe>
                </a>
              ) : appointments.citas.lugar == "Alajuela" ? (
                <iframe
                  src="https://embed.waze.com/iframe?zoom=16&lat=10.004728&lon=-84.226586&ct=livemap&pin=1"
                  width="600"
                  height="450"
                  allowfullscreen
                ></iframe>
              ) : appointments.citas.lugar == "Perez Zeledon" ? (
                <iframe
                  src="https://embed.waze.com/iframe?zoom=16&lat=9.340725&lon=-83.669211&ct=livemap&pin=1"
                  width="600"
                  height="450"
                  allowfullscreen
                ></iframe>
              ) : (
                "no encontrado en mapa"
              )}
            </div>
          ) : (
            <div className="containerr">
              <p>
                No hay citas programadas para este día. fecha:{" "}
                {value.toISOString().substring(0, 10)}
              </p>
              {/* Enlace "Quieres sacar una cita?" que dispara handleClick() */}
              <Link className="link" href="#" onClick={handleClick}>
                ¿Quieres sacar una cita?
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calenddar;
