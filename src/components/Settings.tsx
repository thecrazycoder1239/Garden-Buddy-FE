import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";

export default function Settings() {
  const { user } = useContext(UserContext);



  const [usernameFormEdit, setUsernameFormEdit] = useState(false);
  const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
  const [surnameFormEdit, setSurnameFormEdit] = useState(false);
  const [passwordFormEdit, setPasswordFormEdit] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentUsername, setCurrentUsername] = useState('');
  const [currentFirstName, setCurrentFirstName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  // const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);


  if(user) {
    return (
      <>
        <section className="edit-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let goodUsername = true;
              if(currentUsername === '') {
                setUsernameErr('please input a username')
                goodUsername = false;
            } else if(currentUsername.length > 30) {
                setUsernameErr('max 30 characters')
                goodUsername = false;
            } else if(currentUsername.match(/\s/g)) {
                setUsernameErr("please replace spaces with '_' or '-'")
                goodUsername= false;
            } else {
                setUsernameErr('')
            }

              if(goodUsername === true) {
                console.log('username ready to patch')
                // patch request
                // rerender the page again, so the placeholders are updated
              }

              if (usernameFormEdit) {
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
              onChange={(e) => {
                setCurrentUsername(e.target.value)
              }}  
              value={currentUsername}
            />
            <button className="edit-btn" type="submit">
              {usernameFormEdit ? "submit" : "edit"}
            </button>
            {usernameFormEdit ? <button onClick={(e) => {
              setCurrentUsername('')
              setUsernameFormEdit(false)
            }} className="edit-btn-cancel">cancel</button> : <></>}
            <p className="login-error-message">{usernameErr === '' ? '' : usernameErr}</p>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let goodFirstName = true;
            if(currentFirstName === '') {
                setFirstNameErr('please input a first name')
                goodFirstName = false;
            } else if (!currentFirstName.match(/^[A-Z]/g)) {
                setFirstNameErr('please capitalise the first letter of your name')
                goodFirstName = false;
            } else if (currentFirstName.length > 30) {
                setFirstNameErr('max 30 characters')
                goodFirstName = false;
            } else {
                setFirstNameErr('')
            }

            if(goodFirstName === true) {
              console.log('ready for first name patch request')
              // patch request
                // rerender the page again, so the placeholders are updated
            }

              if (firstNameFormEdit) {
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
              value={currentFirstName}
              onChange={(e) => {
                setCurrentFirstName(e.target.value)
              }}  
            />
            <button className="edit-btn" type="submit">
              {firstNameFormEdit ? "submit" : "edit"}
            </button>
            {firstNameFormEdit ? <button onClick={(e) => {
              setCurrentFirstName('')
              setFirstNameFormEdit(false)
            }} className="edit-btn-cancel">cancel</button> : <></>}
            <p className="login-error-message">{firstNameErr === '' ? '' : firstNameErr}</p>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let goodLastName = true
              if(currentLastName === '') {
                setLastNameErr('please input a last name')
                goodLastName = false;
            } else if (!currentLastName.match(/^[A-Z]/g)) {
                setLastNameErr('please capitalise the first letter of your name')
                goodLastName = false;
            } else if(currentLastName.length > 50) {
                setLastNameErr('max 50 characters')
                goodLastName = false;
            } else {
                setLastNameErr('')
            }    

              if(goodLastName === true) {
                console.log('last name ready for patch')
                // patch request
                // rerender the page again, so the placeholders are updated
              }

              if (surnameFormEdit) {
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
              onChange={(e) => {
                setCurrentLastName(e.target.value)
              }}  
              value={currentLastName}
            />
            <button className="edit-btn" type="submit">
              {surnameFormEdit ? "submit" : "edit"}
            </button>
            {surnameFormEdit ? <button onClick={(e) => {
              setCurrentLastName('')
              setSurnameFormEdit(false)
            }} className="edit-btn-cancel">cancel</button> : <></>}
            <p className="login-error-message">{lastNameErr === '' ? '' : lastNameErr}</p>
          </form>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();

              let goodPassword = true;
              if (passwordFormEdit) {
                if(currentPassword === '') {
                  setPasswordErr('please input a password')
                  goodPassword = false;
              } else if(currentPassword.length < 8) {
                  setPasswordErr('minimum 8 characters')
                  goodPassword = false;
              } else if(!currentPassword.match(/[0-9]/g)) {
                  setPasswordErr('please include a number')
                  goodPassword = false;
              } else if(!currentPassword.match(/[A-Z]/g)) {
                  setPasswordErr('please include a capital letter')
                  goodPassword = false;
              } else {
                  setPasswordErr('')
              }

              if(goodPassword === true) {
                console.log('ready for patch')
                // patch request
                // rerender the page again, so the placeholders are updated
              }

              if(passwordFormEdit) { 
                setPasswordFormEdit(false);
              } else {
                setPasswordFormEdit(true);
              }
            }}}
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
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value)
              }}  
            />
            <button className="edit-btn" type="submit">
              {passwordFormEdit ? "submit" : "edit"}
            </button>
            {passwordFormEdit ? <button onClick={(e) => {
              setCurrentPassword('')
              setPasswordFormEdit(false)
            }} className="edit-btn-cancel">cancel</button> : <></>}
            <p className="login-error-message">{passwordErr === '' ? '' : passwordErr}</p>
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
