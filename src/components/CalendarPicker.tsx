import React from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

interface CalendarPickerProps {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function CalendarPicker(props: CalendarPickerProps){

    const {date, setDate} = props;

    return(
            <section className="date-selector">
            <label htmlFor="plant-date" >Set plant date</label>
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