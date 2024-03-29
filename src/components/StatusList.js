import React from "react"; 
import Status from "./Status"
import 'bulma/css/bulma.min.css'; 
import './StatusList.css'; 
import './leftSideBar.css'
import blank from "./../img/blank.webp";
import man from "./../img/man.jpeg";

const mainStatusList = [
  {
    username: 'Paul',
    handle: '@.paul_luo',
    status: 'I am feeling good today.',
    date: "1/1/12"
  },
  {
    username: 'Sally',
    handle: '@sally.berry',
    status: 'I am feeling bad today.',
    date: "1/11/12"
  },
  {
    username: 'Nancy',
    handle: '@nancyGErTRude68',
    status: 'Cake today.',
    date: "1/11/12"
  },
  {
    username: 'Confucius',
    handle: '@subtle-thoughts',
    status: 'To be or not to be.',
    date: "1/11/12"
  },
]

function StatusList(){
  return(
    <React.Fragment>
    <div class = "column">
      <div class = "box">
        <div class = "columns">
          <div class = "column">
             <figure class="image is-96x96">
                 <img class = "profileImage" src = {man} alt ="profile-picture"/>
             </figure>
          </div>
          <div class = "column">
            <div class = "searchBox">
              <input type="text" placeholder="What's happening?"></input>
            </div>
        </div>
        </div>
            {mainStatusList.map((status,index) => 
              <div class = "box">
                  <div class = "columns">
                    <div class = "column">
                      <figure class="image is-96x96">
                        <img src = {blank} alt ="profile-picture"/>
                      </figure>
                    </div>
                    <div class = "column">
                        <Status username = {status.username}
                                handle = {status.handle}
                                status = {status.status}
                                key = {index} 
                      />
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
    </React.Fragment>
  )
}

export default StatusList; 