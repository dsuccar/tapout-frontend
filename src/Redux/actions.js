// action creators


function changeSearchText(value) {
  return { 
    type: "CHANGE_SEARCH_TEXT", 
    payload: value 
};
}


// function updatePainting(){ title, name, birthday, deathday, paintingId } {
//   return {
//     type: "UPDATE_BREWERY",
//     payload: { title, name, birthday, deathday, paintingId}
//   };
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
      console.log("wowow")
      console.log(breweries)
      dispatch(fetchedBreweries(breweries))
    })
  }
}

export { changeSearchText, fetchedBreweries, fetchingBreweries};
