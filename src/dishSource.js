//use this endpoint for getMenuDetails --> GET Recipe information Bulk 
//use this endpoint for searchDishes --> GET Search recipes
import { API_KEY, BASE_URL } from "./apiConfig";

function processHTTPResponseACB(response){
    if(response.status!==200)
      throw (`Error: ${response.status}`)
    return response.json();
}

function processHTTPContentACB(response){
  console.log(response);
  return response;
}

function onResponseFailureACB(err){
  console.error(err);
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
  const param = array.join();
  return fetch(BASE_URL+API_ENDPOINT_1+'?ids='+param, options)
  .then(processHTTPResponseACB)
  .then(processHTTPContentACB)
  .catch(onResponseFailureACB);
}

function getDishDetails(id) {
 
  
  return getMenuDetails([id]);
  
}

function searchDishes(object) {
  console.log(object.type);
  const param = new URLSearchParams(`query=${encodeURIComponent(object.query)}&type=${encodeURIComponent(object.type)}`);
  return fetch(BASE_URL+API_ENDPOINT_2+param, options)
  .then(onResponseSuccessACB);
} 

export {getMenuDetails,getDishDetails,searchDishes};