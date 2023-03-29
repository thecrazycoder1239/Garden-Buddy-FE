
// Hooks
import { Routes, Route } from "react-router-dom";
import './App.css';

// Components
import Login from './components/login';
import Header from "./components/Header";
import Nav from "./components/Nav";
import MyCalendar from "./components/MyCalendar";
import TodaysTasks from "./components/TodaysTasks";
import EditAndLog from "./components/EditAndLog";
import UpcomingTasks from "./components/UpcomingTasks";
import MyPlants from "./components/MyPlants";
import AllPlants from "./components/AllPlants";
import Settings from './components/user-settings';


// Styles
import "./App.css";
import SignUp from "./components/SignUp";

function App() {

  return (
    <div className="App">

      <Header />
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MyCalendar />}>
          <Route path="my-calendar/todays-tasks" element={<TodaysTasks />} />
          <Route
            path="/my-calendar/upcoming-tasks"
            element={<UpcomingTasks />}
          />
          <Route path="/my-calendar/my-plants" element={<MyPlants />} />
          <Route
            path="/my-calendar/plant_id/edit-log"
            element={<EditAndLog />}
          />
        </Route>
        <Route path="/all-plants" element={<AllPlants />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
