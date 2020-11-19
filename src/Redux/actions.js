

function changeSearchText(value) {
  return { 
    type: "CHANGE_SEARCH_TEXT", 
    payload: value 
};
}

function changeReviewText(text){
  return {
    type: "CHANGE_REVIEW_TEXT",
    payload: text
  }
}
// function changeReviewText(reeviewId) {
//   return (dispatch) => {
// fetch(`http:localhost:3000/reviews/${reviewId}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json"
// },
//   body: JSON.stringify({
//     text:  "string"
//   })
// }).then(resp => resp.json())
// .then(r => {
//  dispatch(updatedReview(r))})
  
// }
// }




function fetchedBreweries(breweries){
  return {
    type: "FETCHED_BREWERIES", 
    payload: breweries
  }};


function fetchingBreweries() {
  const URL = 'http://localhost:3000/breweries'
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(breweries => {
      dispatch(fetchedBreweries(breweries))
    })
  }
}


function fetchedReviews(reviews){
  return {
    type: "FETCHED_REVIEWS", 
    payload: reviews
  }};

function fetchingReviews() {
  const URL = 'http://localhost:3000/reviews'
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(reviews => {
      dispatch(fetchedReviews(reviews))
    })
  }
}

function fetchedUsers(users){
  return {
    type: "FETCHED_USERS", 
    payload: users
  }};


function fetchingUsers() {
  const URL = 'http://localhost:3000/users'
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(users => {
      dispatch(fetchedUsers(users))
    })
  }
}


export { changeSearchText, 
  fetchedBreweries, 
  fetchingBreweries,
  fetchingReviews, 
  fetchedReviews,
  fetchingUsers,
  fetchedUsers,
  changeReviewText};
