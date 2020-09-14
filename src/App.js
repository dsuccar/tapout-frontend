import React, { Component } from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import './App.css';
import AboutPage from "./components/AboutPage"
import Navbar from "./components/Navbar";
import BreweriesContainer from "./components/BreweriesContainer"
import {connect} from 'react-redux'
import {fetchingBreweries} from './Redux/actions'



class App extends Component {

  componentDidMount(){
    this.props.fetchingBreweries()
  }

  render() {
  return (
   <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route path="/" component={BreweriesContainer} />
      </Switch>
   </div>
  );
}
}
 

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchingBreweries: (breweries) => {dispatch( fetchingBreweries(breweries) )}
      // prop " () => {dispatch(actionOBJ)}
    }
  }

export default withRouter(connect(null, mapDispatchToProps)(App));
