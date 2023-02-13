//use this endpoint for getMenuDetails --> GET Recipe information Bulk 
//use this endpoint for searchDishes --> GET Search recipes
import { API_KEY, BASE_URL } from "./apiConfig";

function processHTTPResponseACB(response){
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

function searchDishes(object) {
  console.log(object.type);
  const param = new URLSearchParams(`query=${encodeURIComponent(object.query)}&type=${encodeURIComponent(object.type)}`);
  return fetch(BASE_URL+API_ENDPOINT_2+param, options)
  .then(processHTTPResponseACB)
  .then(processHTTPContentACB)
  .catch(onResponseFailureACB);
} 

export {getMenuDetails,getDishDetails,searchDishes};