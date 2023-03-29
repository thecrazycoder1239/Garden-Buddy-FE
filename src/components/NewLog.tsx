export default function NewLog() {
    return (
      <form className="new-log">
        <label htmlFor="log">How's your plant looking today?</label>
        <textarea id="log"></textarea>
        <button className="form" type="submit">Enter</button>
      </form>
    );
}