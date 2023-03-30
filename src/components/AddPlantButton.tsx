import React, {useState} from "react";
import DatePicker from "react-datepicker";
/* might need to install PropTypes */

/* file source? or package from install */
import "react-datepicker/dist/react-datepicker.css";

export default function AddPlantButton(){

    const [startDate, setStartDate] = useState(new Date());

    return(
        <section className="add-plants-button">
            <button>Plant Now</button>
            <button>Choose Date</button>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            
        </section>
    )
}