import styled from 'styled-components'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <Avatar  />
        <AvTimerIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon/>
        <input 
          placeholder="search"
        />
      </HeaderSearch>
      <HeaderRight>
        <HelpIcon/>
      </HeaderRight>
    </Container>
  )
}

export default Header

const HeaderRight = styled.div`
flex: 0.3;
display: flex;
justify-content: flex-end;

>.MuiSvgIcon-root{
  padding-right: 20px 
}
`

const HeaderSearch = styled.div`
flex: .4;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid gray;
margin: 0px 20px;
border-radius: 5px;
background-color: #370738;

>.MuiSvgIcon-root{
  padding: 0 10px;
}

>input{
  background-color: transparent;
  color: white;
  outline: none;
  border: none; 
  flex: 1;
}
`

const Container = styled.div`
background-color: var(--slack-color);
color: white;
width: 100%;
display: flex;
align-items: center;
position: fixed;
z-index: 99999;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  padding: 20px 0;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`
const Avatar = styled(AccountCircleIcon)`


:hover{
  opacity: 0.8;
  cursor: pointer;
}
`