// Hooks
import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
import MyCalendar from "./components/MyCalendar";
import Nav from "./components/Nav";

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
      <MyCalendar />
    </div>
  );
}

export default App;
