//use this endpoint for getMenuDetails --> GET Recipe information Bulk 
//use this endpoint for searchDishes --> GET Search recipes
import { API_KEY, BASE_URL } from "./apiConfig";

function processHTTPResponseACB(response){
    response.json();
}

function processHTTPContentACB(array){
  if(array.length>0)  
    return array[0];
}

function onResponseFailureACB(error){
  console.log(error);
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
  fetch(BASE_URL+API_ENDPOINT_1+'?ids='+param, options)
  .then(processHTTPResponseACB)
  .catch(onResponseFailureACB);
  
  //.catch(onResponseFailureACB);
}

function getDishDetails(id) {
  //const array = [id];
  getMenuDetails([id]).then(processHTTPContentACB);
}

function searchDishes(object) {
  console.log(object.type);
  const param = new URLSearchParams("?type="+object.type+"&query="+object.query);
  fetch(BASE_URL+API_ENDPOINT_2+param, options)
  .then(onResponseSuccessACB);
}

export {getMenuDetails,getDishDetails,searchDishes};