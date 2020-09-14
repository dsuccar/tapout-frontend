import React from 'react';
import { connect } from 'react-redux';

const Searchbar = props => {
  
  return(
  <div>
    <input
    type="text"
    placeholder="Search"
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
    />
  </div>
    )
    
  }

  const mapStateToProps = (state) => {
    // debugger
    return {
      value: state.searchText  
    }
  }

  const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (input) => { 
      dispatch({type: "CHANGE_SEARCH_TEXT", payload: input})
    }  
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)