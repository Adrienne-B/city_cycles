import React from 'react'
import '../styles/SearchBar.css';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
{/* // import {HiSearch } from "react-icons/hi"; */}

function SearchBar() {
  return (
    <div className= "SearchBar">
        <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.."></input>
            <button id="buttonHome" type="submit"><i class="fa fa-search"></i></button>
            {/* <i class="bi bi-search"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
         </form>
    </div>
  )
}

export default SearchBar