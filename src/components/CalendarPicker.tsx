import React, { useState } from "react";
import useParams from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface CalendarPickerProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function CalendarPicker(props: CalendarPickerProps) {
  const { date, setDate } = props;

  return (
    <section className="date-selector">
      <label htmlFor="plant-date">Choose a planting date</label>
      <DatePicker
        id="plant-date"
        selected={date}
        onChange={(date: Date) => {
          setDate(date);
        }}
      />
    </section>
  );
}
