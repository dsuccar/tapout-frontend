
import React from "react";
import { Route, Switch } from "react-router-dom";
import BreweriesList from "./BreweriesList";
import BreweryDetail from "./BreweryDetail";
import BreweryForm from "./BreweryForm";
import Searchbar from "./Searchbar";
import {connect} from 'react-redux'


class BreweriesContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
         
          <Route
            path="/breweries/:breweryId"
            component={BreweryDetail}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar />
                <BreweriesList />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}



// Given null for mapStateToProps because doesnt need to read state
export default BreweriesContainer;


