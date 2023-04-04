import plantpot from "../assets/plant-icon2.png";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
// import location from '../assets/location.png';
// import closedeye from "../assets/closed.png";
// import openeye from "../assets/open.png";
import openeye from "../assets/eye-regular.svg";
import closedeye from "../assets/eye-slash-regular.svg";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Navigate, Link } from "react-router-dom";

// Icons
import {RiLockPasswordLine} from 'react-icons/ri'
import {
  AiOutlineEye, 
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

export default function Login() {
  const [passwordVisibility, setPasswordVisbility] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [SendingRequest, setSendingRequest] = useState(false);

  const { user, login} = useContext(UserContext);

  const togglePasswordVisibility = () => {
    if (passwordVisibility === false) {
      setPasswordVisbility(true);
    } else setPasswordVisbility(false);
  };

  if (user) {
    return <Navigate to="/all-plants" />;
  }

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSendingRequest(true);
        login({ username, password })
          .then(() => {
            setSendingRequest(false);
          })
          .catch((reason) => {
            if (password === "") {
              setPasswordError("please provide a password");
              setUsernameError("");
            } else if (username === "") {
              setUsernameError("please provide a username");
              setPasswordError("");
            } else if (reason.response.status === 403) {
              setPasswordError("incorrect password");
              setUsernameError("");
            } else if (reason.response.status === 404) {
              setUsernameError("username not found");
              setPasswordError("");
            }
          });
      }}
    >
      {/* <div className="image-div">
        <img className="form-image" alt="user-profile" src={plantpot}></img>
      </div> */}
      <h2>Login</h2>
      <div className="input-field">
        <label className="label" htmlFor="username-input">
          <AiOutlineMail className="input-img" />
          Username
        </label>
        <input
          id="username-input"
          placeholder="e.g. kev13"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <p className="login-error-message">
          {usernameError !== "" ? usernameError : ""}
        </p>
      </div>
      <div className="input-field">
        <label className="label" htmlFor="password-input">
          {/* <img className="input-img" alt="" src={lock}></img> */}
          <RiLockPasswordLine className="input-img" />
          Password
          <img
            className="password-eye"
            alt="password-visibility-off"
            src={passwordVisibility ? openeye : closedeye}
            onClick={togglePasswordVisibility}
          ></img>
        </label>
        <input
          type={passwordVisibility ? "input" : "password"}
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="login-error-message">
          {passwordError !== "" ? passwordError : ""}
        </p>
      </div>
      {/* <div className="input-field">
                <label className="label" htmlFor="location-input">
                <img className='input-img' alt='' src={location}></img>
                location</label>
                <input id="location-input"></input>
            </div> */}
      <button className="login" type="submit">
        Log in
      </button>
      <p className="request-waiting-message">
        {SendingRequest
          ? "attempting to log you in, apologies for the wait!"
          : ""}
      </p>
      <Link to="/sign-up">
        <p className="sign-up-text">Sign Up</p>
      </Link>
    </form>
  );
}
