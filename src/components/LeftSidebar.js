import React from "react"; 
import FlexContainer from "../components/style/FlexContainer"; 
function LeftSideBar(){

  return (
    <FlexContainer>
        <FlexContainer styles = {{justifyContent: "center"}}>
          <h1 className="color">Neo Therdal</h1>
        </FlexContainer>

      <p>I am cave man.</p>
    </FlexContainer>
  )
}

export default LeftSideBar;

