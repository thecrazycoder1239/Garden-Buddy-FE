// Hooks
import { Outlet, Link } from 'react-router-dom'

export default function MyCalendar() {
    return (
      <section className="my-calendar">
        <ul className="my-calendar-tabs">
          <Link to={`my-calendar/todays-tasks`}>
            <li>Today's Tasks</li>
          </Link>
          <Link to={`my-calendar/upcoming-tasks`}>
            <li>Upcoming Tasks</li>
          </Link>
          <Link to={`my-calendar/my-plants`}>
            <li>My Plants</li>
          </Link>
        </ul>
        <Outlet />
      </section>
    );
}