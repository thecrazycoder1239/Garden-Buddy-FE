// Icons
import { FaSearch } from 'react-icons/fa'

// Hooks
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchForPlant() {
  const [, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSearchParams({search: searchTerm, page: '1'})
    setSearchTerm("")
  }

  return (
    <form onSubmit={handleSubmit} className="search-for-plant">
        <input 
          type="search" 
          placeholder="Search for a plant..."
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit"><FaSearch /></button>
    </form>
  );
}
