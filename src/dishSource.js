//use this endpoint for getMenuDetails --> GET Recipe information Bulk 
//use this endpoint for searchDishes --> GET Search recipes
import { API_KEY, BASE_URL } from "./apiConfig";

function processHTTPResponseACB(response){
    if(response.status!==200 || !(response.ok)) {
      throw new Error(`Error: ${response.status}`);
      //return undefined;
    }
    return response.json();
}

function processHTTPContentACB(response){
  //console.log(response);
  //console.log("this is the second then");
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
  const param = array.join();
  return fetch(BASE_URL+API_ENDPOINT_1+'?ids='+param, options)
  .then(processHTTPResponseACB)
  .then(processHTTPContentACB)
  .catch(onResponseFailureACB);
}

async function getDishDetails(id) {
  const obj = await getMenuDetails([id]);
  //console.log(obj);
  //console.log("this shouldnt return anything");
  console.log(obj[0]);
  return obj[0];
}

function searchDishes(object) {
  console.log(object.type);
  const param = new URLSearchParams(`query=${encodeURIComponent(object.query)}&type=${encodeURIComponent(object.type)}`);
  return fetch(BASE_URL+API_ENDPOINT_2+param, options)
  .then(onResponseSuccessACB);
} 

export {getMenuDetails,getDishDetails,searchDishes};