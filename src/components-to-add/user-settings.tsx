import { useState } from "react";

export default function Settings() {
	const [usernameFormEdit, setUsernameFormEdit] = useState(false);
	const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
	const [surnameFormEdit, setSurnameFormEdit] = useState(false);
	const [passwordFormEdit, setPasswordFormEdit] = useState(false);
	const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);

	return (
		<section className="edit-form">
			<div className="edit-form-item">
			{usernameFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setUsernameFormEdit(false);
					}}
				>
					<label className="edit-label" htmlFor="settings-username">username</label>
					<input
						type="text"
						id="settings-username"
						placeholder="<current username>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p className="edit-label">username: *insert username*</p>
			)}
			{usernameFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setUsernameFormEdit(true);
					}}
					className="edit-button"
				>
					edit
				</button>
			)}
		</div>

		<div className="edit-form-item">
        {firstNameFormEdit ? (
			<form 
                className="input-field"
                onSubmit={(e) => {
                e.preventDefault();
                setFirstNameFormEdit(false);
            }}
        >
				<label className="edit-label" htmlFor="settings-first-name">firstname</label>
				<input 
                type='text'
                id="settings-first-name" 
                placeholder="<first name>" 
            />
				<button type="submit">submit</button>
			</form>
        ) : (
            <p className="edit-label">firsname: *insert firstname*</p>
        )}
            {firstNameFormEdit ? (
                <></>
            ) : (
                <button onClick={() => {
                    setFirstNameFormEdit(true);
                }}
				className="edit-button"
            >
                edit
                </button>
            )}
		</div>

		<div className="edit-form-item">
        {surnameFormEdit ? (
			<form 
                className="input-field"
                onSubmit={(e) => {
						e.preventDefault();
						setSurnameFormEdit(false);
					}}
                >
				<label className="edit-label" htmlFor="settings-surname">surname</label>
				<input 
                    type='text' 
                    id="settings-surname" 
                    placeholder="<surname>" 
                />
				<button type="submit">submit</button>
			</form>
        ) : (
            <p className="edit-label">surname: *insert surname*</p>
        )}
        {surnameFormEdit ? (
            <></>
        ) : (
            <button
                onClick={() => {
                setSurnameFormEdit(true);
            }}
			className="edit-button"
        >
            edit
            </button>
        )}
        </div>

		<div className="edit-form-item">
        {passwordFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setPasswordFormEdit(false);
					}}
				>
					<label className="edit-label" htmlFor="settings-password">password</label>
					<input
						type="text"
						id="settings-password"
						placeholder="<current password>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p className="edit-label">password: *insert password*</p>
			)}
			{passwordFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setPasswordFormEdit(true);
					}}
					className="edit-button"
				>
					edit
				</button>
			)}
		</div>

		<div className="edit-form-item">
            {profileUrlFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setProfileUrlFormEdit(false);
					}}
				>
					<label className="edit-label" htmlFor="settings-profile-url">profile-url</label>
					<input
						type="text"
						id="settings-profle-url"
						placeholder="<current profile-url>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p className="edit-label">profile: *insert profile-url*</p>
			)}
			{profileUrlFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setProfileUrlFormEdit(true);
					}}
					className="edit-button"
				>
					edit
				</button>
			)}
		</div>
	</section>
	);
}
