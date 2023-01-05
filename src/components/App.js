import React from "react"; 
import Header from "./Header"; 
import SearchBar from "./SearchBar";
import LeftSideBar from "./LeftSidebar";
import StatusList from "./StatusList";

function App(){
  return (
    <React.Fragment>
      <Header/>
      <SearchBar/>
      <LeftSideBar/>
      <StatusList/>
    </React.Fragment>
  )
}

export default App;
