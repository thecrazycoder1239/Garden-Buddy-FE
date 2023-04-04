import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import {AddTaskModal} from "./AddTaskModal";

export default function SingleUserPlantCard({
	plant,
}: {
	plant: UsersPlant;
}) {
	const { user } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	if(user) {
	return (
		<section className="my-plants">
			<ul className="my-plants-cards">
				<li>
					<h2>{plant.plant_id}</h2>
					<h2>{plant.name}</h2>
					<p>Growing Since: {plant.planted_date}</p>
					<img alt="plant" src={plant.thumbnail_url} />
					<button className="task-menu-button" onClick={() => setIsModalOpen(true)}>
						Add Task
					</button>
					<AddTaskModal
						isOpen={isModalOpen}
						user={user}
						usersPlantId={plant.plant_id.toString()}
					/>
				</li>
				<br></br>
			</ul>
		</section>
		);
	}
}
