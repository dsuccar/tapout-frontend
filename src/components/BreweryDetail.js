import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BreweryDetail= props => {
  
    console.log("review details", props.reviews)
    return !props.brewery ? null :(
           !props.reviews ? null :(

    <div>
      <h1>{props.brewery.name}</h1>
      <h2>{props.brewery.city}</h2>
      <h3>{props.reviews.text}</h3>

      {props.reviews.map(review=>
      <h5>{review.text}</h5>
      )}

    </div>
      )
    )
  };
  

const mapStateToProps = (state, ownProps) => {

  return{
  brewery: state.breweries.find(brewery => brewery.id.toString()
  === ownProps.match.params.breweryId),
  reviews: state.reviews.filter( review => review.brewery_id.toString() === ownProps.match.params.breweryId)
} 
}

export default connect(mapStateToProps)(BreweryDetail);
