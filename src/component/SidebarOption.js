import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { app } from '../base'
import { enterRoom } from '../features/appCounter'
import firebase from "firebase"


const SidebarOption = ({Icon, title, addChannel, id}) => {

const dispatch = useDispatch()

  const newChannel = async() => {
    const channelName = prompt("Please, Enter the Channel Name")
    await app.firestore().collection("channelRoom").add({
      name: channelName,
      // time: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  const selectChannel = () => {
   if(id){
    dispatch(enterRoom({
      roomID: id
    }))
   }
  }

  return (
    <SidebarContainer
      onClick={ addChannel ? newChannel : selectChannel  }
    >
      {
        Icon && <Icon  style={{padding:"5px"}} fontSize="small"/>
      }
     {
       Icon ? <h4>{title}</h4> : <SidebarChannel>
         <span>#</span>{title}
       </SidebarChannel>
     }
    </SidebarContainer>
  )
}

export default SidebarOption

const SidebarChannel = styled.div`
font-size: 12px;
font-weight: 500;

span{
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
  
}
`

const SidebarContainer = styled.div`
display: flex;
padding: 10px;
align-items: center;



>h4{
  font-size: 12px;
  margin-left: 10px;
  transform: scale(1)
}

> .MuiSvgIcon-root{

  :hover{
    opacity: 0.8;
    cursor: pointer;
  }
}

:hover{
  background-color: #370738;
  cursor: pointer;
  transform: scale(1.01);
  border-top: 2px solid #49274b;
  border-bottom: 2px solid #49274b;
}
`