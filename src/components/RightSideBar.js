import React from "react" 
import User from "./User"
import blank from "./../img/blank.webp";

const mainUserList = [ 
  {name: 'Evgeny'},
  {name: 'Paul'},
  {name: 'Bryce'},
  {name: 'PJ'}
]

function RightSideBar(){
  return(
    <React.Fragment> 
    <div class = "column is-two-thirds">
      <div class = "box">
          { mainUserList.map((user,index) =>
          <div class = "box"> 
            <div class = "columns">
                <div class = "column">
                  <figure class="image is-128x128">
                      <img class src = {blank} alt ="profile-picture"/>
                  </figure>
                </div>
                <div class ="column">
                  <User name = {user.name} 
                  index = {index}/>
                  <button class = "button is-small is-link">
                    Add friend
                  </button>
                </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
  // <React.Fragment>
  //   {/* {mainUserList.map((user,index) => 
  //   <User name = {user.name}
  //     index = {index} />
  //   )}
  //   <button type = "button">Add Friend</button> */}
  // </React.Fragment>
}

export default RightSideBar;