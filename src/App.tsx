// Hooks
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Components
// import Login from "./components-to-add/login";
import HeaderInstalled from "./components/HeaderInstalled";
import Nav from "./components/Nav";
import MyCalendar from "./components/MyCalendar";
import TodaysTasks from "./components/TodaysTasks";
import EditAndLog from "./components/EditAndLog";
import UpcomingTasks from "./components/UpcomingTasks";
import MyPlants from "./components/MyPlants";
import AllPlants from "./components/AllPlants";

// Styles
import "./App.css";
import SignUp from "./components/SignUp";

// Images
import downloadIcon from "./assets/download.png";

// Icons
import { BiUserCircle } from "react-icons/bi";
import Settings from "./components/user-settings";

function App() {
  const object: any = {};
  const [deferredPrompt, setDeferredPrompt] = useState(object);
  const [ableToInstall, setAbleToInstall] = useState(false);
  const [hasInstalled, setHasInstalled] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setDeferredPrompt(event);
      setAbleToInstall(true);
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
      {/* <Login /> */}
      {/* {hasInstalled && ableToInstall ? ( */}
      {true ? (
        <>
          <HeaderInstalled />
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
              <Route path="/my-calendar/my-plants" element={<MyPlants />} />
              <Route
                path="/my-calendar/plant_id/edit-log"
                element={<EditAndLog />}
              />
            </Route>
            <Route
              path="/all-plants"
              element={
                <AllPlants />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </>
      ) : (
        <header className="App-header">
          <div className="install-btn" onClick={handleInstall}>
            <button className="install-btn-text">Install App</button>
            <img
              className="install-btn-img"
              src={downloadIcon}
              alt="install"
            ></img>
          </div>
          <Link to={"/"}>
            <h1>Garden Buddy</h1>
          </Link>
          <BiUserCircle />
        </header>
      )}
    </div>
  );
}

export default App;
