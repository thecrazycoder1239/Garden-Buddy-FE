import plantpot from '../assets/plant-icon2.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
// import location from '../assets/location.png';
import closedeye from '../assets/closed.png';
import openeye from '../assets/open.png';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login () {

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
            <div className='image-div'>
                <img className="form-image" alt="user-profile" src={plantpot}></img>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="username-input">
                    <img className='input-img' alt='' src={mail}></img>
                    Username</label>
                
                <input id="username-input" placeholder="e.g. kev13"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">
                <img className='input-img' alt='' src={lock}></img>
                Password
                <img className='password-eye' alt='password-visibility-off' src={passwordVisibility ? openeye : closedeye}
                onClick={togglePasswordVisibility}></img>
                </label>
                <input type={passwordVisibility ? 'input' : 'password'}
                id="password-input"></input>
            </div>
            {/* <div className="input-field">
                <label className="label" htmlFor="location-input">
                <img className='input-img' alt='' src={location}></img>
                location</label>
                <input id="location-input"></input>
            </div> */}
                <button className='submit-button' type="submit">Log in</button>
                <Link to="/sign-up">
                <p className='sign-up-text'>Sign Up</p>
                </Link>
        </form>
    )
}