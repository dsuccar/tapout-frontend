import React from "react";
import BreweryListItem from "./BreweryListItem";
import {connect} from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'


const BreweriesList = props => {
  console.log("list's props", props)
  return(
    <Card>
      <Card.Content>
       
        {props.breweries.map(brewery => (
          <BreweryListItem
            key={brewery.id}
            brewery={brewery}
          /> 
        ))}
      </Card.Content>
    </Card>
  );
}
const mapStateToProps = (state) => {
//  debugger
  return{
  breweries: state.breweries.filter(
    b => 
      b.name.toLowerCase().includes(state.searchText.toLowerCase()) ||
      b.city.toLowerCase().includes(state.searchText.toLowerCase())
  )
  }
}

export default  connect(mapStateToProps)(BreweriesList);
