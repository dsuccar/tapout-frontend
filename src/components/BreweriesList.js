import React from "react";
import BreweryListItem from "./BreweryListItem";
import {connect} from 'react-redux'


const BreweriesList = props => {
  console.log("list's props", props)
  return(
    <div className="ui container">
      
       
        {props.breweries.map(brewery => (
          <BreweryListItem
            key={brewery.id}
            brewery={brewery}
          /> 
        ))}
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
  breweries: state.breweries
  }
}

export default  connect(mapStateToProps)(BreweriesList);
