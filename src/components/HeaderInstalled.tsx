// Hooks
import { Link } from "react-router-dom";
import { useContext } from "react";

// Icons
import { BiUserCircle } from "react-icons/bi";

import { UserContext } from "../contexts/User";

export default function HeaderInstalled() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="App-header">
      <Link to={"/"}>
        <h1>Garden Buddy</h1>
      </Link>
      <BiUserCircle />
      {user && user.password ? (
        <button className="logout form" onClick={logout}>
          Logout
        </button>
      ) : (
        <></>
      )}
    </header>
  );
}
