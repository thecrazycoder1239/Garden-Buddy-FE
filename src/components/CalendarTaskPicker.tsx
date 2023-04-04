import React, {useState} from "react";
import useParams from 'react-router-dom';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

interface CalendarTaskPickerProps {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export default function CalendarTaskPicker(props: CalendarTaskPickerProps){

    const {date, setDate} = props;

    return(
            <section className="date-selector">
            <label htmlFor="plant-date" >Set Task date</label>
            <DatePicker
                id="plant-date"
                selected={date}
                onChange={(date: Date) => {
                    setDate(date);
                    }}
                />
        </section>
    )
}