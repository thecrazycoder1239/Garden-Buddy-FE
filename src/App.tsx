import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import downloadIcon from './assets/download.png'
import './App.css';

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
  }, [])

  const handleInstall = () => {
    deferredPrompt.prompt()
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hasInstalled && ableToInstall ? <></> :
        <div className='install-btn' onClick={handleInstall}>
          <button className='install-btn-text'>Install App</button><img className='install-btn-img' src={downloadIcon} alt="install"></img>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
