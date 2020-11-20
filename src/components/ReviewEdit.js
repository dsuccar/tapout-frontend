import React from "react";
import {  Button, Form, TextArea } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";



  
    const ReviewDetails = props => {
  console.log("review edit",props)

      return( !props.review && !props.brewery ? null :(

      <div>
       
        <Form>
          <TextArea 
            type="text"
            value = {props.review.text}
            onChange={e => props.onChange({input: e.target.value, id:props.review.id})}
            />
       
        </Form>
        <Link to={`/breweries/${props.review.brewery_id}`}>
          <Button type = "submit">Save</Button>
        </Link>
        

     
     </div>
         
      
    )
      )
  }



const mapStateToProps = (state, ownProps) => {
  // debugger
  return{
  review: state.reviews.find( review => review.id.toString() === ownProps.match.params.reviewId),
  
} 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (input) => { 
      dispatch({type: "CHANGE_REVIEW_TEXT", payload: input })
    }  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewDetails);

