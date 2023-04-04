import { useState } from "react";
import Modal from "react-modal";
import CalendarPicker from "./CalendarPicker";
import { postTaskToUsersPlant } from "../utils/api";

type UserPlantPopUpProps = {
	isOpen: boolean;
	onClose: () => void;
	user: User;
	usersPlantId: string;
	onRequestClose: () => void;
};

export default function AddTaskModal({ isOpen, onRequestClose, user, usersPlantId }: AddTaskModalProps) {
	isOpen,
	onClose,
	user,
	usersPlantId,
}: UserPlantPopUpProps) {
	const [date, setDate] = useState(new Date());

	const handleAddTask = async (taskSlug: string, taskStartDate: Date) => {
		try {
			await postTaskToUsersPlant(user, usersPlantId, taskSlug, taskStartDate);
			onClose();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>Add Task</h2>
			<button onClick={onRequestClose}>Close</button>
			<ul>
				<li>
				<button onClick={() => handleAddTask("watering", date)}>Watering</button>
				<CalendarPicker date={date} setDate={setDate} />
			</li>
			<li>
				<button onClick={() => handleAddTask("pruning", date)}>Pruning</button>
				<CalendarPicker date={date} setDate={setDate} />
			</li>
			</ul>
		</Modal>
	);
}
