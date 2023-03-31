import { Link, Navigate } from 'react-router-dom';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
// import location from '../assets/location.png';
import closedeye from '../assets/closed.png';
import openeye from '../assets/open.png';
import person from '../assets/person.png';
import {useContext, useState} from 'react';
import { signUp } from '../utils/api';
import { UserContext } from '../contexts/User';


export default function SignUp () {


    const [passwordVisibility, setPasswordVisbility] = useState(false);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [firstNameErr, setFirstNameErr] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [passwordDefault, setPasswordDefault] = useState(true);
    const [SendingRequest, setSendingRequest] = useState(false);

    const togglePasswordVisibility = () => {
        if (passwordVisibility === false ) {
            setPasswordVisbility(true)
        } else (setPasswordVisbility(false))
    }

    const { user, login } = useContext(UserContext);

    if(user) {
        return <Navigate to="/all-plants" />;
    }

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();

            let goodRequest = true;

            setPasswordDefault(false);
                        
            if(username === '') {
                setUsernameErr('please input a username')
                goodRequest = false;
            } else if(username.length > 30) {
                setUsernameErr('max 30 characters')
                goodRequest = false;
            } else if(username.match(/\s/g)) {
                setUsernameErr("please replace spaces with '_' or '-'")
                goodRequest= false;
            } else {
                setUsernameErr('')
            }

            if(firstName === '') {
                setFirstNameErr('please input a first name')
                goodRequest = false;
            } else if (!firstName.match(/^[A-Z]/g)) {
                setFirstNameErr('please capitalise the first letter of your name')
                goodRequest = false;
            } else if (firstName.length > 30) {
                setFirstNameErr('max 30 characters')
                goodRequest = false;
            } else {
                setFirstNameErr('')
            }

            if(lastName === '') {
                setLastNameErr('please input a last name')
                goodRequest = false;
            } else if (!lastName.match(/^[A-Z]/g)) {
                setLastNameErr('please capitalise the first letter of your name')
                goodRequest = false;
            } else if(lastName.length > 50) {
                setLastNameErr('max 50 characters')
                goodRequest = false;
            } else {
                setLastNameErr('')
            }    

            if(password === '') {
                setPasswordErr('please input a password')
                goodRequest = false;
            } else if(password.length < 8) {
                setPasswordErr('minimum 8 characters')
                goodRequest = false;
            } else if(!password.match(/[0-9]/g)) {
                setPasswordErr('please include a number')
                goodRequest = false;
            } else if(!password.match(/[A-Z]/g)) {
                setPasswordErr('please include a capital letter')
                goodRequest = false;
            } else {
                setPasswordErr('')
            }

            if(goodRequest === true) {
                setSendingRequest(true);
                signUp(username, firstName, lastName, password).then(response => {
                    login({username, password})
                    setSendingRequest(false);
                }).catch(reason => {
                    if(reason.response.status === 409) {
                        setUsernameErr('username already exists')
                    }
                    setSendingRequest(false)
                })
            }
        }}> 
            <div className="input-field">
                <label className="label" htmlFor="first-name-input">
                <img className='input-img' alt='' src={person}></img>
                First name</label>
                <input value={firstName} onChange={(e) => {setFirstName(e.target.value)}} id="first-name-input"></input>
                <p className="login-error-message">{firstNameErr !== "" ? firstNameErr : ""}</p>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="last-name-input">
                <img className='input-img' alt='' src={person}></img>
                Last name</label>
                <input value={lastName} onChange={(e) => {setLastName(e.target.value)}} id="last-name-input"></input>
                <p className="login-error-message">{lastNameErr !== "" ? lastNameErr : ""}</p>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="username-input">
                    <img className='input-img' alt='' src={mail}></img>
                    Username</label>
                <input value={username} onChange={(e) => {setUsername(e.target.value)}} id="username-input" placeholder="e.g. kev13"></input>
                <p className="login-error-message">{usernameErr !== "" ? usernameErr : ""}</p>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">
                <img className='input-img' alt='' src={lock}></img>
                Password
                <img className='password-eye' alt='password-visibility-off' src={passwordVisibility ? openeye : closedeye}
                onClick={togglePasswordVisibility}></img>
                </label>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} type={passwordVisibility ? 'input' : 'password'}
                id="password-input"></input>
                <p className="password-instructions">{passwordDefault ? 'must include a minimum of 8 characters, a capital letter and a number' : ''}</p>
                <p className="login-error-message">{passwordErr !== "" ? passwordErr : ""}</p>
            </div>
            {/* <div className="input-field">
                <label className="label" htmlFor="location-input">
                <img className='input-img' alt='' src={location}></img>
                Garden location</label>
                <input value={location} onChange={(e) => {setLocation(e.target.value)}} id="location-input"></input>
            </div> */}
                <button className='submit-button' type="submit">Sign up</button>
                <p className='request-waiting-message'>{SendingRequest ? "attempting to sign you up, apologies for the wait!": ""}</p>
                <Link to="/log-in">
                <p className='sign-up-text'>Log in</p>
                </Link>
        </form>
    )
}