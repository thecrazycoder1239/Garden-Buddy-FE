// Components
import TodaysTasks from './TodaysTasks'

export default function MyCalendar() {
    return (
      <section className="my-calendar">
        <ul className="my-calendar-tabs">
          <li className="active">Today's Tasks</li>
          <li>Upcoming Tasks</li>
          <li>My Plants</li>
        </ul>
        <TodaysTasks />
      </section>
    );
}