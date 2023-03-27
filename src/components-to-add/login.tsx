

export default function Login () {

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            console.log('hello')
        }}>
            <div className="input-field">
                <label className="label" htmlFor="username-input">username</label>
                <input id="username-input" placeholder="e.g. john123"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="password-input">password</label>
                <input id="password-input"></input>
            </div>
            <div className="input-field">
                <label className="label" htmlFor="location-input">location</label>
                <input id="location-input"></input>
            </div>
            <div className="input-field">
                <button type="submit">Log in</button>
            </div>
        </form>
    )
}