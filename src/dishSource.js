//use this endpoint for getMenuDetails --> GET Recipe information Bulk 
//use this endpoint for searchDishes --> GET Search recipes
import { API_KEY, BASE_URL } from "./apiConfig";

function processHTTPResponseACB(response){
    if(response.status!==200) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}

function processHTTPContentACB(response){
  return response;
} 

function onResponseFailureACB(err){
  return err;
}

const API_ENDPOINT_1 = 'recipes/informationBulk';
const API_ENDPOINT_2 = 'recipes/complexSearch';
const options = {
	method: 'GET',
	headers: {
		'X-Mashape-Key': API_KEY,
	}
};

function getMenuDetails(array) {
  console.log("This is send as request to API when loading");
  console.log(array);
  const param = array.join(",");
  return fetch(BASE_URL+API_ENDPOINT_1+'?ids='+param, options)
  .then(processHTTPResponseACB)
  .then(processHTTPContentACB);
}

function handleObjectReturnedACB(response) {
  return response[0];
}

function getDishDetails(id) {
  return getMenuDetails([id]).then(handleObjectReturnedACB);
}

function handleObjectReturnedForDishesACB(response) {
  return response.results;
}

function searchDishes(object) {
  const paramString = 'query='+object.query+'&'+'type='+object.type;
  const param = new URLSearchParams(paramString);
  if(object.query === undefined) {
    param.delete('query');

  }
  if(object.type === undefined) {
    param.delete('type');
  }
  return fetch(BASE_URL+API_ENDPOINT_2+'?'+param, options)
  .then(processHTTPResponseACB)
  .then(processHTTPContentACB)
  .then(handleObjectReturnedForDishesACB);
} 

export {getMenuDetails,getDishDetails,searchDishes};