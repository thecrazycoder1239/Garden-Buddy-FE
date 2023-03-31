import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";

export default function Settings() {
  const { user } = useContext(UserContext);



  const [usernameFormEdit, setUsernameFormEdit] = useState(false);
  const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
  const [surnameFormEdit, setSurnameFormEdit] = useState(false);
  const [passwordFormEdit, setPasswordFormEdit] = useState(false);
  // const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);

  if(user) {
    return (
      <>
        <section className="edit-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (usernameFormEdit) {
                // patch request
                // rerender the page again, so the placeholders are updated
                setUsernameFormEdit(false);
              } else {
                setUsernameFormEdit(true);
              }
            }}
            className="edit-form-item"
          >
            <label className="edit-label" htmlFor="edit-username">
              Username:
            </label>
            <input
              type="text"
              id="edit-username"
              placeholder={`${user.username}`}
              disabled={!usernameFormEdit ? true : false}
            />
            <button className="edit-btn" type="submit">
              {usernameFormEdit ? "submit" : "edit"}
            </button>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (firstNameFormEdit) {
                // patch request
                // rerender the page again, so the placeholders are updated
                setFirstNameFormEdit(false);
              } else {
                setFirstNameFormEdit(true);
              }
            }}
            className="edit-form-item"
          >
            <label className="edit-label" htmlFor="edit-firstname">
              First name:
            </label>
            <input
              type="text"
              id="edit-firstname"
              placeholder={`${user.first_name}`}
              disabled={!firstNameFormEdit ? true : false}
            />
            <button className="edit-btn" type="submit">
              {firstNameFormEdit ? "submit" : "edit"}
            </button>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (surnameFormEdit) {
                // patch request
                // rerender the page again, so the placeholders are updated
                setSurnameFormEdit(false);
              } else {
                setSurnameFormEdit(true);
              }
            }}
            className="edit-form-item"
          >
            <label className="edit-label" htmlFor="edit-surname">
              Last name:
            </label>
            <input
              type="text"
              id="edit-surname"
              placeholder={`${user.last_name}`}
              disabled={!surnameFormEdit ? true : false}
            />
            <button className="edit-btn" type="submit">
              {surnameFormEdit ? "submit" : "edit"}
            </button>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (passwordFormEdit) {
                // patch request
                // rerender the page again, so the placeholders are updated
                setPasswordFormEdit(false);
              } else {
                setPasswordFormEdit(true);
              }
            }}
            className="edit-form-item"
          >
            <label className="edit-label" htmlFor="edit-password">
              Password:
            </label>
            <input
              type="text"
              id="edit-password"
              placeholder={`${user.password}`}
              disabled={!passwordFormEdit ? true : false}
            />
            <button className="edit-btn" type="submit">
              {passwordFormEdit ? "submit" : "edit"}
            </button>
            {/* {passwordFormEdit ? <button className="">cancel edit</button> : <></>} */}
          </form>
  
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              if (profileUrlFormEdit) {
                // patch request
                // rerender the page again, so the placeholders are updated
                setProfileUrlFormEdit(false);
              } else {
                setProfileUrlFormEdit(true);
              }
            }}
            className="edit-form-item"
          >
            <label className="edit-label" htmlFor="edit-profileurl">
              Avatar url:
            </label>
            <input
              type="text"
              id="edit-profileurl"
              placeholder="<current avatar url>"
              disabled={!profileUrlFormEdit ? true : false}
            />
            <button className="edit-btn" type="submit">
              {profileUrlFormEdit ? "submit" : "edit"}
            </button>
          </form> */}
        </section>
  
        <section className="toggle-options">
          <div className="toggle-option">
            <p className="label-text">Notifications</p>
  
            <label className="toggle-label" htmlFor="notifications-switch">
              <input id="notifications-switch" type="checkbox" hidden />
              <span className="slider"></span>
            </label>
          </div>
  
          <div className="toggle-option">
            <p className="label-text">Location access</p>
            <label className="toggle-label" htmlFor="location-access-switch">
              <input id="location-access-switch" type="checkbox" hidden />
              <span className="slider"></span>
            </label>
          </div>
  
          <div className="toggle-option">
            <p className="label-text">Dark Mode</p>
            <label className="toggle-label" htmlFor="dark-mode-switch">
              <input id="dark-mode-switch" type="checkbox" hidden />
              <span className="slider"></span>
            </label>
          </div>
        </section>
  
        <button className="review-app-button">
          Leave a review on Garden Buddy!
        </button>
      </>
    );
  } else {
    return (<p className="settings-not-found-message">please log in before viewing settings</p>)
  }
}
