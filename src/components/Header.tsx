// Hooks
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

// Icons
import { BiUserCircle } from "react-icons/bi";

// Images
import downloadIcon from '../assets/download.png';

export default function Header() {

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
    <header className="App-header">
      {/* {hasInstalled ? (
          <></>
        ) : (
          <button className="pwa-install" onClick={handleInstall}>
            download our app
          </button>
        )} */}
      {hasInstalled && ableToInstall ? <></> :
        <div className='install-btn' onClick={handleInstall}>
          <button className='install-btn-text'>Install App</button><img className='install-btn-img' src={downloadIcon} alt="install"/>
        </div>
      }
      <Link to={"/"}>
        <h1>Garden Buddy</h1>
      </Link>
      <BiUserCircle />
    </header>
  );
}
