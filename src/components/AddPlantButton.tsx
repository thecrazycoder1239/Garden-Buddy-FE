import React, {useState} from "react";
import useParams from 'react-router-dom';
import DatePicker from "react-datepicker";
/* might need to install PropTypes */

/* file source? or package from install */
import "react-datepicker/dist/react-datepicker.css";

interface AddPlantButtonProps {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function AddPlantButton(props: AddPlantButtonProps){

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