import React from 'react'
import '../styles/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

console.log(SearchIcon );

function SearchBar() {
  return (
    <div className= "SearchBar">
        <form class="example" action="action_page.php">
          <input type="text" placeholder="Search.."></input>
          <button id="buttonHome" type="submit"></button>
          <div style={{color: "white"}} className='svg'><SearchIcon/></div>    
       </form>
    </div>
  )
}

export default SearchBar

//         <button id="buttonHome" type="submit" style={{color: "blue"}}><SearchIcon/></button>