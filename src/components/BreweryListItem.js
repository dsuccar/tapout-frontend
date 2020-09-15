import React from "react";
import { Link } from "react-router-dom";

const BreweryListItem = props => {
  // console.log(props)
return (
  <Link className="item" to={`/breweries/${props.brewery.id}`}>
    <div className="content">
      <h2>{props.brewery.name}</h2>
      <em>
        {props.brewery.city}
      </em>
    </div>
  </Link>
)
};

export default BreweryListItem;
