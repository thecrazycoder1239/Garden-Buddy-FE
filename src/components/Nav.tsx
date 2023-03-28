// Hooks
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
      <nav>
        <ul>
          <li className="active">
            <Link to={"/my-calendar/todays-tasks"}>My Calendar</Link>
          </li>
          <li>
            <Link to={"/all-plants"}>View All Plants</Link>
          </li>
        </ul>
      </nav>
    );
}