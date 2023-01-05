import React from "react"; 

function Header() { 
  return( 
    <React.Fragment styles={{justifyContent: "center"}}>
      <a href ="#">Home </a>
      <a href = "#">Notifications </a>
      <a href ="#">Messages </a>
    </React.Fragment>
  );
}

export default Header 