import React from "react";
import {  Form, TextArea } from 'semantic-ui-react'

import { connect } from "react-redux";



  
    const ReviewDetails = props => {
  console.log(props)
      return( !props.review ? null :(
  
      <div>
        <Form>
    <TextArea 
       type="text"

       value = {props.review[0].text}
       />
        </Form>
     
     </div>
         
      
    )
      )
  }



const mapStateToProps = (state, ownProps) => {
  return{
  review: state.reviews.filter( review => review.id.toString() === ownProps.match.params.reviewId),

} 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (input) => { 
      dispatch({type: "CHANGE_REVIEW_TEXT", payload: input})
    }  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewDetails);

