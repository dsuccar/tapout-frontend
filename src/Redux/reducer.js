import { combineReducers } from "redux";


// import breweriesData from "../breweries.json";

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload;
    default:
      return state;
  }
};

const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_BREWERIES":
      return action.payload
    default:
      return state;
    
      }};

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_REVIEWS":
      return action.payload
    default:
      return state;
    
      }};


const rootReducer = combineReducers({
  searchText: searchTextReducer,
  breweries: breweriesReducer,
  reviews: reviewsReducer
});

export default rootReducer;
