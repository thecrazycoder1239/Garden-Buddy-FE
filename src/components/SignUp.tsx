import { Link } from 'react-router-dom';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
import location from '../assets/location.png';
import closedeye from '../assets/closed.png';
import openeye from '../assets/open.png';
import {useState} from 'react';

export default function SignUp () {


    const [passwordVisibility, setPasswordVisbility] = useState(false);

    const togglePasswordVisibility = () => {
        if (passwordVisibility === false ) {
            setPasswordVisbility(true)
        } else (setPasswordVisbility(false))
    }

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
        }}> 
            <div className="input-field">
                <label className="label" htmlFor="first-name-input">
                first name</label>
                <input id="first-name-input"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="last-name-input">
                fast name</label>
                <input id="last-name-input"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="username-input">
                    <img className='input-img' alt='' src={mail}></img>
                    username</label>
                
                <input id="username-input" placeholder="e.g. kev13"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">
                <img className='input-img' alt='' src={lock}></img>
                password
                <img className='password-eye' alt='password-visibility-off' src={passwordVisibility ? openeye : closedeye}
                onClick={togglePasswordVisibility}></img>
                </label>
                <input type={passwordVisibility ? 'input' : 'password'}
                id="password-input"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="location-input">
                <img className='input-img' alt='' src={location}></img>
                garden location</label>
                <input id="location-input"></input>
            </div>
                <button className='submit-button' type="submit">Sign up</button>
                <Link to="/login">
                <p className='sign-up-text'>Log in</p>
                </Link>
        </form>
    )
}