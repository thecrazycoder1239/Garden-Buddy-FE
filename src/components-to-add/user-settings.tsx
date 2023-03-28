import { useState } from "react";
import floralPattern from "../assets/floral.png";

export default function Settings() {
	const [usernameFormEdit, setUsernameFormEdit] = useState(false);
	const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
	const [surnameFormEdit, setSurnameFormEdit] = useState(false);
	const [passwordFormEdit, setPasswordFormEdit] = useState(false);
	const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);

	return (
		<>
		<section className="edit-form">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if(usernameFormEdit) {
							// patch request
							// rerender the page again, so the placeholders are updated
							setUsernameFormEdit(false);
						} else {
							setUsernameFormEdit(true)
						}
					}}
					className="edit-form-item"
				>
					<label className="edit-label" htmlFor="edit-username">Username:</label>
					<input
						type="text"
						id="edit-username"
						placeholder="<current username>"
						disabled={!usernameFormEdit ? true : false}
					/>
					<button className="edit-btn" type="submit">{ usernameFormEdit ? "submit" : "edit"}</button>
				</form>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						if(firstNameFormEdit) {
							// patch request
							// rerender the page again, so the placeholders are updated
							setFirstNameFormEdit(false);
						} else {
							setFirstNameFormEdit(true)
						}
					}}
					className="edit-form-item"
				>
					<label className="edit-label" htmlFor="edit-username">First name:</label>
					<input
						type="text"
						id="edit-username"
						placeholder="<current first name>"
						disabled={!firstNameFormEdit ? true : false}
					/>
					<button className="edit-btn" type="submit">{ firstNameFormEdit ? "submit" : "edit"}</button>
				</form>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						if(surnameFormEdit) {
							// patch request
							// rerender the page again, so the placeholders are updated
							setSurnameFormEdit(false);
						} else {
							setSurnameFormEdit(true)
						}
					}}
					className="edit-form-item"
				>
					<label className="edit-label" htmlFor="edit-username">Last name:</label>
					<input
						type="text"
						id="edit-username"
						placeholder="<current last name>"
						disabled={!surnameFormEdit ? true : false}
					/>
					<button className="edit-btn" type="submit">{ surnameFormEdit ? "submit" : "edit"}</button>
				</form>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						if(passwordFormEdit) {
							// patch request
							// rerender the page again, so the placeholders are updated
							setPasswordFormEdit(false);
						} else {
							setPasswordFormEdit(true)
						}
					}}
					className="edit-form-item"
				>
					<label className="edit-label" htmlFor="edit-username">Password:</label>
					<input
						type="text"
						id="edit-username"
						placeholder="<current password>"
						disabled={!passwordFormEdit ? true : false}
					/>
					<button className="edit-btn" type="submit">{ passwordFormEdit ? "submit" : "edit"}</button>
				</form>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						if(profileUrlFormEdit) {
							// patch request
							// rerender the page again, so the placeholders are updated
							setProfileUrlFormEdit(false);
						} else {
							setProfileUrlFormEdit(true)
						}
					}}
					className="edit-form-item"
				>
					<label className="edit-label" htmlFor="edit-username">Avatar url:</label>
					<input
						type="text"
						id="edit-username"
						placeholder="<current avatar url>"
						disabled={!profileUrlFormEdit ? true : false}
					/>
					<button className="edit-btn" type="submit">{ profileUrlFormEdit ? "submit" : "edit"}</button>
				</form>
		</section>
		<img className="settings-background" src={floralPattern} alt="floral pattern"/>
		</>
	);
}
