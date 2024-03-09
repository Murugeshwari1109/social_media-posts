import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from '../context/DataContext';

const Navigation = () => {
  const {search,setSearch}=useContext(DataContext);
  return (
    <nav className="Nav">
        <form className="searchForm" onSubmit={(e)=>e.preventDefault(e)}>
        <label htmlFor="search">Search Posts</label>
        <input 
            id='search'
            type="text" 
            role="searchbox"
            placeholder="Search Items" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newpost">Post </Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
  )
}

export default Navigation