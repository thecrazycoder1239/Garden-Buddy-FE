// Hooks
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

// Icons
import { AiOutlineCalendar } from 'react-icons/ai'
import { TbPlant } from 'react-icons/tb'
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export default function Nav() {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <ul>
        {user === null ? (
          <li>
            <Link to={"/log-in"}>
              <BiLogIn />
              Log in
            </Link>
          </li>
        ) : (
          <></>
        )}
        <li className="active">
          <Link to={"/my-calendar/todays-tasks"}>
            <AiOutlineCalendar />
            My Calendar
          </Link>
        </li>
        <li>
          <Link to={"/all-plants"}>
            <TbPlant />
            View All Plants
          </Link>
        </li>
        {user !== null ? (
          <li>
            <Link to={"/settings"}>
              <FiSettings />
              Settings</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
}
