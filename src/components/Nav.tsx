// Hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/User';

export default function Nav () {

  const { user } = useContext(UserContext);

    return (
      <nav>
        <ul>
          {user === null ? 
        <li>
            <Link to={"/log-in"}>Log in</Link>
        </li>
          <li className="active">
            <Link to={"/my-calendar/todays-tasks"}>My Calendar</Link>
          </li>
          <li>
            <Link to={"/all-plants"}>View All Plants</Link>
          </li>
          <li>
            <Link to={"/settings"}>Settings</Link>
          </li>
        </ul>
      </nav>
    );
}