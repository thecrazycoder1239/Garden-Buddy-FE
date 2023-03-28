// Hooks
import { Link } from 'react-router-dom'

export default function TodaysTasks() {
    return (
      <section className="todays-tasks">
        <ul className="task-cards">
          <li>
            <form>
              <input type="checkbox"></input>
            </form>
            <p>Water Tomatoes</p>
            <Link to={"/my-calendar/plant_id/edit-log"}>Edit / Log</Link>
          </li>
          <li>
            <form>
              <input type="checkbox"></input>
            </form>
            <p>Plant potatoes</p>
            <a>Edit / Log</a>
          </li>
        </ul>
        <button className="full-width add-more-plants">
          Add more plants to your calendar
        </button>
      </section>
    );
}