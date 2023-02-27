import React from 'react';
import { useState, useEffect } from "react";
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';

export default
function Details(props){

    console.log("This is props passed downt to details");
    console.log(props);

    const [dishesLocal, setDishes] = useState(props.model.dishes);
    const [currentDishLocal, setCurrentDish] = useState(props.model.currentDish);
    const [dataLocal, setData] = useState(props.model.currentDishPromiseState.data);
    const [numberOfGuestsLocal, setNumberOfGuests] = useState(props.model.numberOfGuests);

    function observerACB() {
        setDishes(props.model.dishes);
        setCurrentDish(props.model.currentDish);
        setData(props.model.currentDishPromiseState.data);
        setNumberOfGuests(props.model.numberOfGuests);
    }

    function lifeACB() {
        props.model.addObserver(observerACB);
        function ripACB() {
            props.model.removeObserver(observerACB);
        }
        return ripACB;
    }
    
    useEffect(lifeACB, []);

    function addDishToMenuInModelACB(){
        props.model.addToMenu(dataLocal); 
    }

    function isDishAlreadyInMenuACB(dish) {
        return currentDishLocal === dish.id;
    }

    
    return promiseNoData(props.model.currentDishPromiseState) ||  
           <DetailsView onAddingDishToMenu = {addDishToMenuInModelACB}  
                        guests = {numberOfGuestsLocal}
                        dishData = {dataLocal} 
                        isDishInMenu={dishesLocal.filter(isDishAlreadyInMenuACB).length > 0}
            />  
}

