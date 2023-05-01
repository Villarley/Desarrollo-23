import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../css/calendar.css";

function Calenddar() {
  const [value, onChange] = useState(new Date().toISOString().substring(0, 10).toString());
  const [selectedAppointments, setSelectedAppointments] = useState({});
  const appointments = JSON.parse(localStorage.getItem("personalc"));
  console.log(typeof value);
  const onClickDay = (value, event) => {
    const selectedDate = value.toISOString().substring(0, 10);
    const selectedAppointments = appointments[selectedDate] || [];
    setSelectedAppointments(selectedAppointments);
  };

  return (
    <div className="react-calendar-con">
      <div className="calendar-wrapper">
        <Calendar
          onClickDay={onClickDay}
          onChange={onChange}
          value={value}
          className="react-calendar"
          prev2Label={null}
          next2Label={null}
        ></Calendar>
        <div className="appointments">
          {value.toString() == appointments.citas.fecha
            ? (<p>{appointments.citas.fechas}</p>)
            : (<p>No hay citas programadas para este día. fecha: {appointments.citas.fecha}</p>
            )}
        </div>
      </div>
    </div>
  );
}
export default Calenddar;
