import React from "react" 

mainUserList = [ 
  {name: 'Evgeny'},
  {name: 'Paul'},
  {name: 'Bryce'},
  {name: 'PJ'}
]

function RightSideBar(){
  <React.Fragment>
    {mainUserList.map((user,index) => 
      name = user.name
      index = index 
    />)}
  </React.Fragment>

}

export default RightSideBar;