import { BASE_URL } from "./apiConfig";


function onResponseSuccessACB(response){
    console.log(response.data);
}

function onResponseFailureACB(error){
    console.log(error);
}

function getMenuDetails(array){
    fetch(BASE_URL,{
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/%7Bid%7D',
        headers: {
          'X-RapidAPI-Key': '8b519956f6msh0ffe7c882f3f7e6p1d7bf9jsn833e4633b7ff',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      }).then(onResponseSuccessACB).catch(onResponseFailureACB);   
}

export {getMenuDetails};