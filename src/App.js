import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout'
import {NavigationBar} from './components/NavigationBar'
import {Jumbotron} from './components/Jumbotron'
import Miembros from './components/Miembros'



function App() {
  return (
    <React.Fragment>
      
      <NavigationBar></NavigationBar>
      
{ /* <Jumbotron></Jumbotron>*/}
      
      
      
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/components/Miembros" component={Miembros}></Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
