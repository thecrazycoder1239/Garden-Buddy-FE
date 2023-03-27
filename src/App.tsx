import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const object: any = {};

  const [deferredPrompt, setDeferredPrompt] = useState(object);
  const [hasInstalled, setHasInstalled] = useState(false)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      setDeferredPrompt(event)
    })
    window.addEventListener('appinstalled', () => {
      setHasInstalled(true)
    });
  }, [])

  const handleInstall = () => {
    deferredPrompt.prompt()
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hasInstalled ? <></> :
        <h2 className='pwa-install'>
          Click here to <button onClick={handleInstall}>download our app</button>
        </h2>
        }
      </header>
    </div>
  );
}

export default App;
