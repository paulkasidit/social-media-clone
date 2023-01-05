import React from "react"; 
import Status from "./Status"


const mainStatusList = [
  {
    username: 'Paul',
    status: 'I am feeling good today.',
    date: "1/1/12"
  },
  {
    username: 'Sally',
    status: 'I am feeling bad today.',
    date: "1/11/12"
  },
]

function StatusList(){
  return(
    <React.Fragment>
      {mainStatusList.map((status,index) => 
        <Status username = {status.username}
        status = {status.status}
        date = {status.date}
        key = {index} />
      )}
    </React.Fragment>
  )
}

export default StatusList; 