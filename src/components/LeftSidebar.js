import React from "react"; 
import 'bulma/css/bulma.min.css';
import man from "./../img/man.jpeg";

function LeftSideBar(){

  return (
    <React.Fragment>
      <div class = "column is-two-thirds">
            <div class = "box">
              <div class = "columns">
                <div class = "column">
                  <div class = "media-left">
                    <figure class="image is-128x128">
                      <img src = {man} alt ="profile-picture"/>
                    </figure>
                  </div>
                </div>
                <div class  = "column">
                  <div class = "media-right">
                    <h1><b>Neo Therdal</b></h1>
                    <p>@.neotherdal</p>
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

