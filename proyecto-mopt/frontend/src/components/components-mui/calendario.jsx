import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./../css/calendar.css";

function Calenddar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={onChange}
        value={value}
        className="react-calendar"
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
}
export default Calenddar;