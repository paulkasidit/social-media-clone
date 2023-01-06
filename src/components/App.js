import React from "react"; 
import 'bulma/css/bulma.min.css';
import Header from "./Header"; 
import SearchBar from "./SearchBar";
import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";
import StatusList from "./StatusList";

function App(){
  return (
    <React.Fragment>
       <section class = "hero is-primary">
        <div class = "hero-body has-text-black-bis has-background-white">
          <div class = "columns">
            <div class = "column">
              <nav class = "breadcrumb is-left" aria-label="breadcrumbs">
                <Header/>
              </nav>
            </div>
            <div class = "column">
            </div>
            <div class = "column">
            </div>
            <div class = "column">
            </div>
            <div class = "column">
              < SearchBar/>
            </div>
          </div>
        </div>
       </section>

      <div class = "container.is-max-widescreen is-fluid">
        <div class = "columns">
          <div class = "column">
            <LeftSideBar/>
          </div>
          <div class = "column">
            <StatusList/>
          </div>
          <div class = "column">
            <RightSideBar/>
          </div>
        </div>
      </div>

      
      
    </React.Fragment>
  )
}

export default App;
