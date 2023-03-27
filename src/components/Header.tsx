// Icons
import { BiUserCircle } from "react-icons/bi";

export default function Header() {
  return (
    <header className="App-header">
      {/* {hasInstalled ? (
          <></>
        ) : (
          <button className="pwa-install" onClick={handleInstall}>
            download our app
          </button>
        )} */}
      <h1>Garden Buddy</h1>
      <BiUserCircle />
    </header>
  );
}
