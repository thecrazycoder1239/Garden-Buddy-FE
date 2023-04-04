import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Link, Navigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { deleteUser, patchUserInfo } from "../utils/api";
import NotificationsSwitch from "./NotificationsSwitch";

export default function Settings() {
  const { user, logout, login } = useContext(UserContext);



  // const [usernameFormEdit, setUsernameFormEdit] = useState(false);
  const [firstNameFormEdit, setFirstNameFormEdit] = useState(false);
  const [surnameFormEdit, setSurnameFormEdit] = useState(false);
  // const [passwordFormEdit, setPasswordFormEdit] = useState(false);
  // const [currentPassword, setCurrentPassword] = useState('');
  // const [currentUsername, setCurrentUsername] = useState('');
  const [currentFirstName, setCurrentFirstName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  // const [passwordErr, setPasswordErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  // const [usernameErr, setUsernameErr] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalPassword, setModalPassword] = useState('');
  const [processingDeleteAccount, setProcessingDeleteAccount] = useState(false);
  const [allowAccountDelete, setAllowAccountDelete] = useState(false);
  const [modalPasswordErr, setModalPasswordErr] = useState('');
  // const [profileUrlFormEdit, setProfileUrlFormEdit] = useState(false);

  function closeModal () {
    setOpenModal(false);
  }

  if (!user && allowAccountDelete === true) {
    return <Navigate to="/sign-up" />;
  }

  if(user) {
    return (
      <>
        <section className="edit-form">

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
              setFirstNameFormEdit(false)
              patchUserInfo(user, currentFirstName, undefined).then(() => {
                const username = user.username;
                const password = user.password
                login({ username, password})
              })
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
            {firstNameFormEdit ? <button onClick={(e) => {
              setCurrentFirstName('')
              setFirstNameFormEdit(false)
              setFirstNameErr('')
            }} className="edit-btn-cancel" type="button">cancel</button> : <button className="edit-btn" type="button" onClick={() => {
              if(firstNameFormEdit) { 
                setFirstNameFormEdit(false);
              } else {
                setFirstNameFormEdit(true);
              }
            }}>edit</button>}
            {firstNameFormEdit ? <button className="edit-btn" type="submit">submit</button> : <></>}
          </form>
          <p className="login-error-message">{firstNameErr === '' ? '' : firstNameErr}</p>
  
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
                setSurnameFormEdit(false)
                patchUserInfo(user, undefined, currentLastName).then(() => {
                  const username = user.username;
                  const password = user.password
                  login({ username, password})
                })
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
            {surnameFormEdit ? <button onClick={(e) => {
              setCurrentLastName('')
              setSurnameFormEdit(false)
              setLastNameErr('')
            }} className="edit-btn-cancel" type="button">cancel</button> : <button className="edit-btn" type="button" onClick={() => {
              if(surnameFormEdit) { 
                setSurnameFormEdit(false);
              } else {
                setSurnameFormEdit(true);
              }
            }}>edit</button>}
            {surnameFormEdit ? <button className="edit-btn" type="submit">submit</button>  : <></>}
          </form>
          <p className="login-error-message">{lastNameErr === '' ? '' : lastNameErr}</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

            //   let goodUsername = true;
            //   if(currentUsername === '') {
            //     setUsernameErr('please input a username')
            //     goodUsername = false;
            //   } else if(currentUsername.length > 30) {
            //     setUsernameErr('max 30 characters')
            //     goodUsername = false;
            // } else if(currentUsername.match(/\s/g)) {
            //     setUsernameErr("please replace spaces with '_' or '-'")
            //     goodUsername= false;
            // } else {
            //     setUsernameErr('')
            // }

            //   if(goodUsername === true) {
            //     console.log('username ready to patch')
            //     // patch request
            //     // rerender the page again, so the placeholders are updated
            //   }
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
              disabled={true}
              // disabled={!usernameFormEdit ? true : false}
              // onChange={(e) => {
              //   setCurrentUsername(e.target.value)
              // }}  
              // value={currentUsername}
            />
            {/* {usernameFormEdit ? <button onClick={(e) => {
              setCurrentUsername('')
              setUsernameFormEdit(false)
              setUsernameErr('')
            }} className="edit-btn-cancel" type="button">cancel</button> : <button className="edit-btn" type="button" onClick={() => {
              if (usernameFormEdit) {
                setUsernameFormEdit(false);
              } else {
                setUsernameFormEdit(true);
              }
            }}>edit</button>}
            {usernameFormEdit ? <button className="edit-btn" type="submit">submit</button> : <></>} */}
          </form>
          {/* <p className="login-error-message">{usernameErr === '' ? '' : usernameErr}</p> */}
  
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // let goodPassword = true;
              // if(currentPassword === '') {
              //     setPasswordErr('please input a password')
              //     goodPassword = false;
              // } else if(currentPassword.length < 8) {
              //     setPasswordErr('minimum 8 characters')
              //     goodPassword = false;
              // } else if(!currentPassword.match(/[0-9]/g)) {
              //     setPasswordErr('please include a number')
              //     goodPassword = false;
              // } else if(!currentPassword.match(/[A-Z]/g)) {
              //     setPasswordErr('please include a capital letter')
              //     goodPassword = false;
              // } else {
              //     setPasswordErr('')
              // }

              // if(goodPassword === true) {
              //   console.log('ready for patch')
              //   // patch request
              //   // rerender the page again, so the placeholders are updated
              // }

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
              disabled={true}
              // disabled={!passwordFormEdit ? true : false}
              // value={currentPassword}
              // onChange={(e) => {
              //   setCurrentPassword(e.target.value)
              // }}  
            />
            {/* {passwordFormEdit ? <button onClick={(e) => {
              setCurrentPassword('')
              setPasswordFormEdit(false)
              setPasswordErr('')
            }} className="edit-btn-cancel" type="button">cancel</button> : <button className="edit-btn" type="button" onClick={() => {
              if(passwordFormEdit) { 
                setPasswordFormEdit(false);
              }
                setPasswordFormEdit(true);
            }}>edit</button>}
            {passwordFormEdit ? <button className="edit-btn" type="submit">submit</button> : <></>} */}
          </form>
          {/* <p className="login-error-message">{passwordErr === '' ? '' : passwordErr}</p> */}
  
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
          <NotificationsSwitch />
  
          {/* <div className="toggle-option">
            <p className="label-text">Location access</p>
            <label className="toggle-label" htmlFor="location-access-switch">
              <input id="location-access-switch" type="checkbox" hidden />
              <span className="slider"></span>
            </label>
          </div> */}
  
          {/* <div className="toggle-option">
            <p className="label-text">Dark Mode</p>
            <label className="toggle-label" htmlFor="dark-mode-switch">
              <input id="dark-mode-switch" type="checkbox" hidden />
              <span className="slider"></span>
            </label>
          </div> */}
        </section>

        <section className="user-btn-container">
          <Link to={"/log-in"}>
          <button className="settings-logout-btn" onClick={logout}>Log out</button>
          </Link>
          <button className="settings-delete-account-btn" onClick={(() => {setOpenModal(true)})}>Delete account</button>
        </section>

        <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="delete account confirmation"
        aria-describedby="enter password and confirm to delete the account"
      >
        <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you Sure?
          </Typography>
          <form onSubmit={(e) => {
            e.preventDefault();

            if(modalPassword === "") {
              setModalPasswordErr("please input a password")
            } else if (modalPassword !== user.password) {
              setModalPasswordErr("incorrect password")
            } else {
              setModalPasswordErr("")
              setProcessingDeleteAccount(true);
              deleteUser(user.username, modalPassword).then(() => {
                setProcessingDeleteAccount(false)
                logout()
                setAllowAccountDelete(true)
              })
            }
          }}>
            <div className="modal-input-container">
              <label id="confirm-password-text" htmlFor="confirm-password">confirm password: </label>
              <input id="confirm-password" value={modalPassword} onChange={(e) => {setModalPassword(e.target.value)}}></input>
            </div>
            <p className="modal-password-err">{modalPasswordErr !== "" ? modalPasswordErr : ""}</p>
            <div className="modal-btn-container">
              <button className="modal-cancel-btn" onClick={() => {closeModal()}}>cancel</button>
              <button className="modal-confirm-btn" type="submit">delete account</button>
            </div>
          </form>
          <p className="modal-delete-account-waiting-msg">{processingDeleteAccount ? "attempting to delete your account, apologies for the wait!" : ""}</p>
        </Box>
      </Modal>
  
        {/* <button className="review-app-button">
          Leave a review on Garden Buddy!
        </button> */}
      </>
    );
  } else {
    return (<p className="settings-not-found-message">please log in before viewing settings</p>)
  }
}
