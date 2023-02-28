import React from 'react';
import { useState, useEffect } from "react";
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';
import resolvePromise from '../resolvePromise.js';

export default
function Details(props){

    console.log("This is props passed down to details");
    console.log(props);

    const [dishesLocal, setDishes] = useState(props.model.dishes);
    const [currentDishLocal, setCurrentDish] = useState(props.model.currentDish);
    const [currDishPromStateLocal, setCurrDishPromState] = useState(props.model.currentDishPromiseState);
    const [numberOfGuestsLocal, setNumberOfGuests] = useState(props.model.numberOfGuests);

    function observerACB() {
        setDishes(props.model.dishes);
        setCurrentDish(props.model.currentDish);
        setCurrDishPromState(props.model.currentDishPromiseState);
        setNumberOfGuests(props.model.numberOfGuests);
    }

    //This runs when currentDishLocal is changed...
    function resolvePromiseForCurrentDishACB() {
        const dishDetails = getDishDetails(currentDishLocal);         //getDishDetails returns a promise
        if(currentDishLocal !== undefined){
            resolvePromise(dishDetails, currDishPromStateLocal);
        }
    }

    function lifeACB() {
        props.model.addObserver(observerACB);
        function ripACB() {
            props.model.removeObserver(observerACB);
        }
        return ripACB;
    }
    
    useEffect(lifeACB, []);
    //This is used to resolvePromise only when currentDishLocal is changed...
    useEffect(resolvePromiseForCurrentDishACB, [currentDishLocal]);  

    function addDishToMenuInModelACB(){
        props.model.addToMenu(currDishPromStateLocal.data); 
    }

    function isDishAlreadyInMenuACB(dish) {
        return currentDishLocal === dish.id;
    }

    
    return promiseNoData(currDishPromStateLocal) ||  
           <DetailsView onAddingDishToMenu = {addDishToMenuInModelACB}  
                        guests = {numberOfGuestsLocal}
                        dishData = {currDishPromStateLocal.data} 
                        isDishInMenu={dishesLocal.filter(isDishAlreadyInMenuACB).length > 0}
            />  
}

