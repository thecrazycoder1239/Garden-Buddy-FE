import { useState } from "react";

export default function Settings() {
	const [usernameFormEdit, setUsernameFormEdit] = useState(false);
	const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
	const [surnameFormEdit, setSurnameFormEdit] = useState(false);
	const [passwordFormEdit, setPasswordFormEdit] = useState(false);
	const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);

	return (
		<section className="form">
			{usernameFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setUsernameFormEdit(false);
					}}
				>
					<label htmlFor="settings-username">username</label>
					<input
						type="text"
						id="settings-username"
						placeholder="<current username>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p>username: *insert username*</p>
			)}
			{usernameFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setUsernameFormEdit(true);
					}}
				>
					edit
				</button>
			)}

        {firstNameFormEdit ? (
			<form 
                className="input-field"
                onSubmit={(e) => {
                e.preventDefault();
                setFirstNameFormEdit(false);
            }}
        >
				<label htmlFor="settings-first-name">firstname</label>
				<input 
                type='text'
                id="settings-first-name" 
                placeholder="<first name>" 
            />
				<button type="submit">submit</button>
			</form>
        ) : (
            <p>firsname: *insert firstname*</p>
        )}
            {firstNameFormEdit ? (
                <></>
            ) : (
                <button onClick={() => {
                    setFirstNameFormEdit(true);
                }}
            >
                edit
                </button>
            )}

        {surnameFormEdit ? (
			<form 
                className="input-field"
                onSubmit={(e) => {
						e.preventDefault();
						setSurnameFormEdit(false);
					}}
                >
				<label htmlFor="settings-surname">surname</label>
				<input 
                    type='text' 
                    id="settings-surname" 
                    placeholder="<surname>" 
                />
				<button type="submit">submit</button>
			</form>
        ) : (
            <p>surname: *insert surname*</p>
        )}
        {surnameFormEdit ? (
            <></>
        ) : (
            <button
                onClick={() => {
                setSurnameFormEdit(true);
            }}
        >
            edit
            </button>
        )}
        

        {passwordFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setPasswordFormEdit(false);
					}}
				>
					<label htmlFor="settings-password">password</label>
					<input
						type="text"
						id="settings-password"
						placeholder="<current password>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p>password: *insert password*</p>
			)}
			{passwordFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setPasswordFormEdit(true);
					}}
				>
					edit
				</button>
			)}

            {profileUrlFormEdit ? (
				<form
					className="input-field"
					onSubmit={(e) => {
						e.preventDefault();
						setProfileUrlFormEdit(false);
					}}
				>
					<label htmlFor="settings-profile-url">profile-url</label>
					<input
						type="text"
						id="settings-profle-url"
						placeholder="<current profile-url>"
					/>
					<button type="submit">submit</button>
				</form>
			) : (
				<p>profile: *insert profile-url*</p>
			)}
			{profileUrlFormEdit ? (
				<></>
			) : (
				<button
					onClick={() => {
						setProfileUrlFormEdit(true);
					}}
				>
					edit
				</button>
			)}
		</section>
	);
}
