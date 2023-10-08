import React from 'react'
import blogBanner from '../images/blogBanner.png';
import Article from "../helpers/Article";
import "../styles/Blog.css";


function Blog() {
  return (
    <div className="Blog" id="blogBanner" style={{backgroundImage: `url(${blogBanner})`}}>
      <div className="overlay">
        <div className="headerContainer">
          <h1>Blog</h1>
          <h5 class="blogSubtitle">If you are looking for a quick ride to any destination and
          any attraction then City Cycles is the place to be.
          One of the most popular places to get a bike.</h5>
          <Article />
        </div>
    </div>
  </div>
  )
}

export default Blog