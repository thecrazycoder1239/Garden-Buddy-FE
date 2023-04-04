import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CalendarTaskPicker from "./CalendarTaskPicker";
import { postTaskToUsersPlant } from "../utils/api";

export default function SingleUserPlantCard({
	plant}: {plant: UsersPlant;}) {
	const { user } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState<TaskSlug | ''>('');
	const [date, setDate] = useState<Date | null>(null);

	function closeModal () {
		setIsModalOpen(false);
	}

	function handleButtonSelection(buttonName: TaskSlug | ''){
		setSelectedButton(buttonName);
	}

	function handleTaskCreation(){
		if(date && user && selectedButton){
			postTaskToUsersPlant(user, plant.users_plant_id, selectedButton, date.toISOString());
			setSelectedButton('');
			setDate(null);
			setIsModalOpen(false);
		}
	}

	if(user) {
	return (
		<section className="my-plants">
			<ul className="my-plant-card">
				<li>
					<h2>{plant.name}</h2>
					<p>Growing Since: {plant.planted_date ? new Date(plant.planted_date).toDateString() : "not applicable"}</p>
					<img className='my-plant-img' alt="plant" src={plant.thumbnail_url} />
					<button className="task-date-selector" onClick={() => {setIsModalOpen(true)}}>
						Add Task
					</button>
					<Modal
					open={isModalOpen}
					onClose={closeModal}
					>
						<Box className='modal'>
							<h2>Task Creator</h2>
							<section className="task-buttons">
							<button className='add-task-button' onClick={() => handleButtonSelection('water')}>Water</button>
							<button className='add-task-button' onClick={() => handleButtonSelection('prune')}>Prune</button>
							<button className='add-task-button' onClick={() => handleButtonSelection('harvest')}>Harvest</button>
							<button className='add-task-button' onClick={() => handleButtonSelection('fertilise')}>Fertilise</button>
							</section>
							<p>{selectedButton}</p>
							{(selectedButton) !== '' ? 
							<CalendarTaskPicker date={date ? date : new Date()} setDate={setDate}
								/>: <></>}
							{(date ? <button className="task-date-selector" onClick={handleTaskCreation}>Add Task</button> : <></> )}
						</Box>
					</Modal>
				</li>
				<br></br>
			</ul>
		</section>
		);
	}
	else {
		return <p>Please Log In</p>
	}
}
