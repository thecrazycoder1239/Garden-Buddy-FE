// Hooks
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import MyCalendar from "./components/MyCalendar";
import TodaysTasks from "./components/TodaysTasks";
import EditAndLog from "./components/EditAndLog";
import UpcomingTasks from "./components/UpcomingTasks";
import MyPlants from "./components/MyPlants";
import AllPlants from "./components/AllPlants";

// Styles
import "./App.css";

function App() {
  const object: any = {};

  const [deferredPrompt, setDeferredPrompt] = useState(object);
  const [hasInstalled, setHasInstalled] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setDeferredPrompt(event);
    });
    window.addEventListener("appinstalled", () => {
      setHasInstalled(true);
    });
  }, []);

  const handleInstall = () => {
    deferredPrompt.prompt();
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
