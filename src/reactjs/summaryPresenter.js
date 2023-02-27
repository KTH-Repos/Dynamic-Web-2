import React from "react";
import SummaryView from "../views/summaryView.js";
import { useState, useEffect } from "react";
import { shoppingList } from "../utilities.js";

export default
function Summary(props){

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

    return <SummaryView
                people={numberOfGuestsLocal} 
                ingredients={shoppingList(dishesLocal) 
                /* empty array for starters */}
            />;
}
