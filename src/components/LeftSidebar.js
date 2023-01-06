import React from "react"; 
import 'bulma/css/bulma.min.css';
import './leftSideBar.css'
import man from "./../img/man.jpeg";
import baby_blue from "./../img/baby_blue.png";

function LeftSideBar(){

  return (
    <React.Fragment>
      <div class = "column">
            <div class = "box">
              <div class = "parent">  
                <figure class="image is-400x400">
                  <img class = "headerImage" src = {baby_blue} alt ="header-picture"/>
                 </figure>
                  <div class = "columns">
                    <div class = "column">
                      <div class = "media-left">
                        <figure class="image is-128x128">
                          <img class = "profileImage" src = {man} alt ="profile-picture"/>
                        </figure>
                      </div>
                      <div class = "handleInformation">
                        <h1><b>Neo Therdal</b></h1>
                        <p>@.neotherdal</p>
                      </div>
                    </div>
                  </div>
                </div>

              <nav class = "breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                <ul>
                  <li>Tweets</li>
                  <li>Following</li>
                  <li>Followers</li>
                </ul>
              </nav>
          </div>
          <div class = "box">
            <p>I am cave man.</p>
          </div>
        </div>
    </React.Fragment>
  )
}

export default LeftSideBar;

