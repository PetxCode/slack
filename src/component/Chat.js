import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedOut from '@material-ui/icons/InfoOutlined';

const Chat = () => {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#RoomName</strong>
            </h4>
            <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedOut/>
          </p> Detail
        </HeaderRight>
      </Header>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
margin-top: 60px;
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
`;
const Header = styled.div`
display: flex;
justify-content: space-between;
padding:20px;
border-bottom: 1px solid lightgray;

`

const HeaderLeft = styled.div`

>h4{
  display: flex;
  text-transform: lowercase;
}
`

const HeaderRight = styled.div`
display: flex;

`
