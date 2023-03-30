import plantpot from '../assets/plant-icon2.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
// import location from '../assets/location.png';
import closedeye from '../assets/closed.png';
import openeye from '../assets/open.png';
import {useContext, useState} from 'react';
import { UserContext } from '../contexts/User';

export default function Login () {

    const [passwordVisibility, setPasswordVisbility] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errCode, setErrCode] = useState(0);

    const { user, login, logout } = useContext(UserContext);

    const togglePasswordVisibility = () => {
        if (passwordVisibility === false ) {
            setPasswordVisbility(true)
        } else (setPasswordVisbility(false))
    }

    if (user) {
      return <p>Welcome {user.first_name} {user.last_name}</p>
    }

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();

            login({username, password})
              .catch(reason => {
                setErrCode(reason.response.status)
              })
        }}> 
            <div className='image-div'>
                <img className="form-image" alt="user-profile" src={plantpot}></img>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="username-input">
                    <img className='input-img' alt='' src={mail}></img>
                    username</label>
                
                <input id="username-input" placeholder="e.g. john123" value={username} onChange={
                  (e) => setUsername(e.target.value)
                }></input>
                <p>{errCode === 404? 'wrong username' : ''}</p>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">
                <img className='input-img' alt='' src={lock}></img>
                password
                <img className='password-eye' alt='password-visibility-off' src={passwordVisibility ? openeye : closedeye}
                onClick={togglePasswordVisibility}></img>
                </label>
                <input type={passwordVisibility ? 'input' : 'password'}
                id="password-input" value={password} onChange={
                  (e) => setPassword(e.target.value)
                }></input>
                <p>{errCode === 403 ? 'incorrect password': ''}</p>
            </div>
            {/* <div className="input-field">
                <label className="label" htmlFor="location-input">
                <img className='input-img' alt='' src={location}></img>
                location</label>
                <input id="location-input"></input>
            </div> */}
                <button className='submit-button' type="submit">Log in</button>
        </form>
    )
}