import React from 'react';
import './App.css';
import NoFound from './Components/NoFound/NoFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './Components/Mainpage/Mainpage';
import Detail from './Components/Detail/Detail';
import Header from './Components/Header/Header';

function App() {
const bodyStyle = {
  align:'center',
  backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
  return (
    <div>
      <Header></Header>
      <div style={bodyStyle}>
      <Router>
        <Switch>
          <Route path="/home">
          <Mainpage></Mainpage>
          </Route>
          <Route exact path="/">
          <Mainpage></Mainpage>
          </Route>
          <Route path="/post/:postId">
            <Detail></Detail>
          </Route>
          <Route exact path="/*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
