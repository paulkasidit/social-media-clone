import React from "react";
import FlexContainer from "../components/style/FlexContainer"; 

function Header() { 
  return(
    <FlexContainer styles = {{width: "100%", justifyContent: "space-around" }}>
        <FlexContainer styles = {{width: "100%", justifyContent: "flex-start" }}>
      <a href ="#">Home </a>
        </FlexContainer>
        <FlexContainer styles = {{width: "100%", justifyContent: "flex-end" }}>
      <a href = "#">Notifications </a>
        </FlexContainer>
      <a href ="#">Messages </a>
     vxcv
    </FlexContainer>
  );
}

export default Header 