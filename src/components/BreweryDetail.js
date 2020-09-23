import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Comment, Form, Header } from 'semantic-ui-react'


const BreweryDetail= props => {
  
    return !props.users ? null :(

    <div>
      <h1>{props.brewery.name}</h1>
      <h2>{props.brewery.city}</h2>
      <h3></h3>

   
      <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
      {props.reviews.map(review=>
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{props.users.find(user => user.id === review.user_id).username}</Comment.Author>
        <Comment.Metadata>
          <div>{review.created_at}</div>
        </Comment.Metadata>
        <Comment.Text>{review.text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
         )}
  </Comment.Group>
    

 

    </div>
      )
    
  };
  

const mapStateToProps = (state, ownProps) => {
  
  return{
  brewery: state.breweries.find(brewery => brewery.id.toString()
  === ownProps.match.params.breweryId),
  reviews: state.reviews.filter( review => review.brewery_id.toString() === ownProps.match.params.breweryId),
  users: state.users
} 
}

export default connect(mapStateToProps)(BreweryDetail);
