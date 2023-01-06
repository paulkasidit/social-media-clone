import React from "react";

function Header() { 
  return(
    <React.Fragment>
        <div class = "columns is-gapless">
          <div class = "column">
            <button class = "button is-outlined">
              <a href ="#">Home </a>
            </button>
          </div>
          <div class = "column">
            <button class = "button is-outlined">
              <a href = "#">Notifications </a>
            </button>
          </div>
          <div class = "column">
            <button class = "button is-outlined">
              <a href ="#">Messages </a>
            </button>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Header 