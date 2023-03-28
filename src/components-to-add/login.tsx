import plantpot from '../assets/plant-icon2.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
import location from '../assets/location.png';

export default function Login () {

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            console.log('hello')
        }}> 
            <div className='image-div'>
                <img className="form-image" alt="user-profile" src={plantpot}></img>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="username-input">username</label>
                <img className='input-img' alt='litte-icon' src={mail}></img>
                <input id="username-input" placeholder="e.g. john123"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">password</label>
                <img className='input-img' alt='litte-icon' src={lock}></img>
                <input id="password-input"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="location-input">location</label>
                <img className='input-img' alt='litte-icon' src={location}></img>
                <input id="location-input"></input>
            </div>
                <button className='submit-button' type="submit">Log in</button>
        </form>
    )
}