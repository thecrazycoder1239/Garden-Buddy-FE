import { useContext, useState } from "react";
import React, { useEffect } from "react";
import { UserContext } from "../contexts/User";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CalendarTaskPicker from "./CalendarTaskPicker";
import { getUsersDetailedPlant, postTaskToUsersPlant } from "../utils/api";
import { deleteUsersPlantById } from "../utils/api";
import { getUsersPlants } from "../utils/api";

export default function SingleUserPlantCard({
	plant,
	setPlants,
}: {
	plant: UsersPlant;
	setPlants: React.Dispatch<React.SetStateAction<UsersPlant[]>>;
}) {
	const { user } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState<TaskSlug | "">("");
	const [date, setDate] = useState<Date | null>(null);
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [deleteMessage, setDeleteMessage] = useState("");
	const [taskMessage, setTaskMessage] = useState("");

	function closeModal() {
		setIsModalOpen(false);
	}

	function handleRemovePlantClick() {
		setIsConfirmModalOpen(true);
	}

	function handleButtonSelection(buttonName: TaskSlug | "") {
		setSelectedButton(buttonName);
	}

	function handleTaskCreation() {
		if (date && user && selectedButton) {
			postTaskToUsersPlant(
				user,
				plant.users_plant_id,
				selectedButton,
				date.toISOString()
			)
      .then(() => {
        if ('serviceWorker' in navigator) {
          return getUsersDetailedPlant(plant.users_plant_id, user)
        }

        return;
      })
			setSelectedButton("");
			setDate(null);
			setTaskMessage("Task created!");
		}
	}

	function handleConfirmRemovePlant(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (user) {
			deleteUsersPlantById(user, plant.users_plant_id)
				.then(() => {
					setDeleteMessage("Plant was removed");
					if (user) {
						getUsersPlants(user).then((plants) => setPlants(plants));
					}
					setTimeout(() => {
						setPlants((currentPlants) => {
							return currentPlants.filter((currentPlant) => {
								return currentPlant.users_plant_id !== plant.users_plant_id;
							});
						});
					}, 2000);
				})
				.catch((error) => {
					setDeleteMessage("Plant couldn't be removed. Try again later");
				});
		}
	}

	if (user) {
		return (
			<li className="my-plant-container">
				<h2>{plant.name}</h2>
				<p>
					Growing Since:{" "}
					{plant.planted_date
						? new Date(plant.planted_date).toDateString()
						: "not applicable"}
				</p>
				<img className="my-plant-img" alt="plant" src={plant.thumbnail_url} />
				<button
					className="task-date-selector"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					Add Task
				</button>
				<Modal open={isModalOpen} onClose={closeModal}>
					<Box className="modal">
						<h2>Task Creator</h2>
						<section className="task-buttons">
							<button
								className="add-task-button"
								onClick={() => handleButtonSelection("water")}
							>
								Water
							</button>
							<button
								className="add-task-button"
								onClick={() => handleButtonSelection("prune")}
							>
								Prune
							</button>
							<button
								className="add-task-button"
								onClick={() => handleButtonSelection("harvest")}
							>
								Harvest
							</button>
							<button
								className="add-task-button"
								onClick={() => handleButtonSelection("fertilise")}
							>
								Fertilise
							</button>
						</section>
						<p>{selectedButton}</p>
						{selectedButton !== "" ? (
							<CalendarTaskPicker date={date ? date : new Date()} setDate={setDate} />
						) : (
							<></>
						)}
						{date ? (
							<button className="task-date-selector" onClick={handleTaskCreation}>
								Add Task
							</button>
						) : (
							<></>
						)}
						{taskMessage && <p>{taskMessage}</p>}
					</Box>
				</Modal>
				<br></br>
				<button className="form" onClick={handleRemovePlantClick}>
					Remove plant
				</button>
				<Modal
					open={isConfirmModalOpen}
					onClose={() => setIsConfirmModalOpen(false)}
				>
					<Box className="modal">
						<h2>Confirm Plant Deletion</h2>
						<p>Are you sure you want to delete this plant?</p>
						<button onClick={handleConfirmRemovePlant}>Confirm</button>
						{deleteMessage && <p>{deleteMessage}</p>}
						<button onClick={() => setIsConfirmModalOpen(false)}>Cancel</button>
					</Box>
				</Modal>
			</li>
		);
	} else {
		return <p>Please Log In</p>;
	}
}
