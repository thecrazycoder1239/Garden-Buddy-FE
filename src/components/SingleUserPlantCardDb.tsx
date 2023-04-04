import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import TaskForm from './TaskForm';

export default function SingleUserPlantCardDb({plant} : {plant: UsersPlant}){

    const { user } = useContext(UserContext);

    const [open, setOpen] = useState(false);

    const handleOpen = (e: any) => {
        setOpen(true);
        e.preventDefault();
    }

    return (
      <li className="my-plant-container">
        <img alt="plant" src={plant.thumbnail_url} />
        <div>
          <h2>{plant.name}</h2>
          <p>Growing since: {plant.planted_date}</p>
          <button className="form">Remove from plants</button>
        </div>
      </li>
    );
}