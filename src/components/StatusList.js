import React from "react"; 
import Status from "./Status"
import FlexContainer from "../components/style/FlexContainer"; 


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
    <FlexContainer>
      {mainStatusList.map((status,index) => 
        <Status username = {status.username}
        status = {status.status}
        date = {status.date}
        key = {index} />
      )}
    </FlexContainer>
  )
}

export default StatusList; 