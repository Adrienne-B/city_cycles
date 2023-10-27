import React from 'react'
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div className= "SearchBar">
        <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.."></input>
            <button id="buttonHome" type="submit"><i class="fa fa-search"></i></button>
         </form>
    </div>
  )
}

export default SearchBar