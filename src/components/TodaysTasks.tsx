export default function TodaysTasks() {
    return (
      <section className="todays-tasks">
        <ul className="task-cards">
          <li>
            <p>Water Tomatoes</p>
            <form>
              <input type="checkbox"></input>
            </form>
          </li>
          <li>
            <p>Plant potatoes</p>
            <form>
              <input type="checkbox"></input>
            </form>
          </li>
        </ul>
        <button className="full-width add-more-plants">
            Add more plants to your calendar
        </button>
      </section>
    );
}