// Icons
import { FaSearch } from 'react-icons/fa'

export default function SearchForPlant() {
  return (
    <form className="search-for-plant">
        <input type="search" placeholder="Search for a plant..." />
        <button type="submit"><FaSearch /></button>
    </form>
  );
}
