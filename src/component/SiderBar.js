import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import PeopleIcon from '@material-ui/icons/People';
import SidebarOption from './SidebarOption';
import InputIcon from '@material-ui/icons/Input';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { useCollection } from 'react-firebase-hooks/firestore';

import { app } from '../base';

const SiderBar = () => {

  const [channel, loading, error] = useCollection(app.firestore().collection("channelRoom"))
  console.log(channel)

  return (
    <SiderHeader>
      <ProfileContainer>
      <Profile>
        <h2>CodeLab Slack</h2>
        <span>
        <FiberManualRecordIcon />
        <h4>Peter</h4>
        </span>
      </Profile>
      <EditProfile />
      
      </ProfileContainer>
      <hr />
      
      <SidebarOption Icon={InsertCommentIcon} title="Threads"  />
      <SidebarOption Icon={PeopleIcon} title="People"  />
      <SidebarOption Icon={InputIcon} title="Input"  />
      <SidebarOption Icon={DraftsIcon} title="Draft"  />
      <SidebarOption Icon={AppsIcon} title="App"  />
      <SidebarOption Icon={FileCopyIcon} title="Browse File"  />
      <SidebarOption Icon={ExpandLessIcon} title="More"  />

      <Hr />
      <SidebarOption Icon={ExpandMoreIcon} title="My Channels"  />
      <Hr />
     
      <SidebarOption Icon={AddIcon} addChannel title="Add Channel"  />
      {
        channel?.docs.map(doc => (
          <SidebarOption selectChannel key={doc.id} id={doc.id} title={doc.data().name} />
        ))
      }
 
    </SiderHeader>
  )
}

export default SiderBar

const Hr = styled.div`
border: 1px solid #49274b;
    margin-top: 5px;
    margin-bottom: 5px
`

const ProfileContainer = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding-right: 10px;
margin-top: 10px;
`

const SiderHeader = styled.div` 
   background-color: var(--slack-color);
   flex: 0.3;
   height: 100vh;
   color: white;
   margin-top: 61px;
   border: 4px solid #49274b;
   max-width: 260px;

   >hr {
    border: 1px solid #49274b;
    margin-top: 20px;
    margin-bottom: 20px
   }
 

`

const Profile = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;



>span {
  display: flex;
  align-items: center;
  
  > .MuiSvgIcon-root{
    color: green;
    font-size: 13px;
    // margin-left: 15px
  }

  >h4{
    font-size: 14px;
    margin-left: 5px
  }
}

>h2{
  font-size: 14px;

}

`

const EditProfile = styled(EditIcon)`
background-color: white;
border-radius: 999px;
color: var(--slack-color);
padding: 10px;
font-size: 12px;
margin-right: 10px;
cursor: pointer;
transition: all 350ms;
opacity: 1;
transform: scale(1);

:hover{
transform: scale(1.05);
opacity: 0.8;
}
`
