import React from "react"; 

function User(props){
  return(
    <React.Fragment>
      <p>{props.name}</p>
    </React.Fragment>
  )
}
export default User;