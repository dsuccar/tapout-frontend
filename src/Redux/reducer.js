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

// const reviewTextReducer = (state = "", action) => {
//   switch (action.type) {

//     case "CHANGE_REVIEW_TEXT":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload
    default:
      return state;
     }};

const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_BREWERIES":
      return action.payload
    default:
      return state;
     }};

const reviewsReducer = (state = [], action) => {
  // console.log("ReviewReducer state and action",state,action.payload)
  switch (action.type) {
    case "FETCHED_REVIEWS":
      return action.payload
    case "CHANGE_REVIEW_TEXT":
      debugger
      return action.payload;
    default:
      return state;
    
      }};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_USERS":
      return action.payload
    default:
      return state;
    
      }};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  breweries: breweriesReducer,
  reviews: reviewsReducer,
  // reviewText: reviewTextReducer,
  users: usersReducer,
  login: loginReducer,
  
});

export default rootReducer;
