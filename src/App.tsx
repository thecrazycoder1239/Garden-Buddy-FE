import React, { useEffect, useState } from 'react';
import downloadIcon from './assets/download.png'
import './App.css';
// import Login from './components-to-add/login';
import Settings from './components-to-add/user-settings';

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
