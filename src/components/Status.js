import React from "react"; 
import PropTypes from "prop-types";

function Status(props){
  return(
    <React.Fragment>
      <h3>{props.username}</h3>
      <p>{props.date}</p>
      <p>{props.status}</p>
    </React.Fragment>
  )
}

Status.propTypes =  { 
  username: PropTypes.string.isRequired, 
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Status;