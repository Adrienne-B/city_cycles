import React from 'react'
import '../styles/SearchBar.css';
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar() {
  return (
    <div className= "SearchBar">
        <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.."></input>
            <button id="buttonHome" type="submit"><AiOutlineSearch/></button>     
       </form>
    </div>
  )
}

export default SearchBar