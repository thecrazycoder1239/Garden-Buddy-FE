export default function SelectTaskFrequency() {
    return (
      <form className="task-frequency">
        <div>
          <input type="radio" id="Twice-a-day" name="task-frequency" />
          <label htmlFor="Twice-a-day">Twice a day</label>
        </div>
        <div>
          <input type="radio" id="every-day" name="task-frequency" />
          <label htmlFor="every-day">Every day</label>
        </div>
        <div>
          <input type="radio" id="every-other-day" name="task-frequency" />
          <label htmlFor="every-other-day">Every other day</label>
        </div>
        <div>
          <input type="radio" id="other" name="task-frequency" />
          <label htmlFor="other">Other (please specify)</label>
        </div>
      </form>
    );
}