import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BreweryDetail= props => {
// debugger
    console.log("brewery details", props.brewery)
    return !props.brewery ? null :(

    <div>
      <h1>{props.brewery.name}</h1>
      <h2>{props.brewery.city}</h2>
    </div>
      
    )};
  

const mapStateToProps = (state, ownProps) => {

  return{
  brewery: state.breweries.find(brewery => brewery.id.toString()
  === ownProps.match.params.breweryId)
}
}

export default connect(mapStateToProps)(BreweryDetail);
