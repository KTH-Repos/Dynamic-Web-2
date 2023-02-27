import React from "react";
import { useState, useEffect } from "react";
import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    
    const [numberOfGuestsLocal, setNumberOfGuests]= useState(props.model.numberOfGuests);
    const [dishesLocal, setDishes]= useState(props.model.dishes);

    function observerACB() {
        setNumberOfGuests(props.model.numberOfGuests);
        setDishes(props.model.dishes);
    }

    function lifeACB() {
        props.model.addObserver(observerACB);
        function ripACB() {
            props.model.removeObserver(observerACB);
        }
        return ripACB;
    }

    useEffect(lifeACB, []);


    function changeGuestsACB(number){
        return props.model.setNumberOfGuests(number)
    }

    function setDishACB(dish){
        const chosenDish = props.model.setCurrentDish(dish.id)
        return chosenDish
    }

    function removeDishACB(dish){
        return props.model.removeFromMenu(dish)
    }

    return<SidebarView 
        number ={numberOfGuestsLocal} 
        dishes = {dishesLocal} 
        onNumberChange = {changeGuestsACB} 
        onDishLink = {setDishACB} 
        onClickXButtonCustom = {removeDishACB}/>; 

}
