
import React from "react";
import { Route, Switch } from "react-router-dom";
import BreweriesList from "./BreweriesList";
import BreweryDetail from "./BreweryDetail";
import ReviewEdit from "./ReviewEdit";
import Searchbar from "./Searchbar";
import {connect} from 'react-redux'


class BreweriesContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
         
          <Route
            exact path="/breweries/:breweryId"
            component={BreweryDetail}
          />

         
          <Route
            exact path="/"
            render={() => (
              <div >
                <Searchbar />
                <BreweriesList />
              </div>
            )}
          />
          <Route  path="/reviews/:reviewId/edit" component={ReviewEdit}/>
        </Switch>
      </div>
    );
  }
}



export default BreweriesContainer;


