import React, { Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styled from 'styled-components'
import Chat from './component/Chat'
import Header from './component/Header'
import SiderBar from './component/SiderBar'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <AppBody>
        <SiderBar />
          <Switch>
          <Route exact path="/" >  
            <Chat />
        </Route>
          </Switch>
        </AppBody>
       
      </Fragment>
    </Router>
  )
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`