import { API_KEY, BASE_URL } from "./apiConfig";


function onResponseSuccessACB(response){
    console.log(response.json());
}

function onResponseFailureACB(error){
    console.log(error);
}

const options = {
	method: 'GET',
	headers: {
		'X-Mashape-Key': API_KEY,
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

function getMenuDetails(array){
  
  console.log(array)
  fetch(BASE_URL , options).then(onResponseSuccessACB)
  .catch(onResponseFailureACB);   
}

export {getMenuDetails};