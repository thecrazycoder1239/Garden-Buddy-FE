
// Hooks
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// Components
// import Login from './components/login';
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

// Images
import downloadIcon from './assets/download.png'

function App() {
  const object: any = {};

  const [deferredPrompt, setDeferredPrompt] = useState(object);

  const [ableToInstall, setAbleToInstall] = useState(false)
  const [hasInstalled, setHasInstalled] = useState(false)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setDeferredPrompt(event)
      setAbleToInstall(true)
    })
    window.addEventListener('appinstalled', () => {
      setHasInstalled(true)
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

      
        {/* <Login/> */}

        <Settings/>
        
        {hasInstalled && ableToInstall ? <></> :
        <div className='install-btn' onClick={handleInstall}>
          <button className='install-btn-text'>Install App</button><img className='install-btn-img' src={downloadIcon} alt="install"></img>
        </div>
        }

    </div>
  );
}

export default App;
