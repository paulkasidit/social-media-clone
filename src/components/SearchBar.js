import React from "react"; 

function SearchBar(){

  return(
    <React.Fragment>
      <div class = "columns">
        <div class = "column">
          <input type="text" placeholder="Search"></input>
        </div>
        <div class = "column">
          <button class = "button is-info is-outlined is rounded has-background-white">
            Tweet
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchBar