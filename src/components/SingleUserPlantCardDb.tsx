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
			<section className="my-plants">
				<ul className="my-plants-cards">
					<li>
						<h2>{plant.plant_id}</h2>
						<h2>{plant.name}</h2>
						<p>Growing Since: {plant.planted_date}</p>
						<img alt="plant" src={plant.thumbnail_url} />
					</li>
				<br></br>
			</ul>
		</section>
	);
}