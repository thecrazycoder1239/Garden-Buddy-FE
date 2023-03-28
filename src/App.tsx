// Hooks
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import MyCalendar from "./components/MyCalendar";
import Nav from "./components/Nav";
import UpcomingTasks from './components/UpcomingTasks'
import TodaysTasks from "./components/TodaysTasks";
import MyPlants from "./components/MyPlants";

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
          <Route 
            path="my-calendar/todays-tasks" 
            element={<TodaysTasks />} 
          />
          <Route
            path="/my-calendar/upcoming-tasks"
            element={<UpcomingTasks />}
          />
          <Route
            path="/my-calendar/my-plants"
            element={<MyPlants />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
