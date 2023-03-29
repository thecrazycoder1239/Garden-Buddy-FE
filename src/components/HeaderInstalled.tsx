// Hooks
import { Link } from 'react-router-dom'

// Icons
import { BiUserCircle } from "react-icons/bi";

export default function HeaderInstalled() {
  return (
    <header className="App-header">
      <Link to={"/"}>
        <h1>Garden Buddy</h1>
      </Link>
      <BiUserCircle />
    </header>
  );
}


