

export default function Settings () {

    return (
        <form className="form">
            <label htmlFor="settings-username">username</label>
            <input type="text" id="settings-username" placeholder="<current username>"/>
            <input id="settings-name"/>
            <input id="settings-password"/>
            <input id="settings-profile"/>
            <button type="submit">submit</button>
        </form>
    )
}