import { useState, useEffect } from "react";
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';
import resolvePromise from '../resolvePromise.js';

export default
function Details(props){

    const [dishesLocal, setDishes] = useState(props.model.dishes);
    const [currentDishLocal, setCurrentDish] = useState(props.model.currentDish);
    const [numberOfGuestsLocal, setNumberOfGuests] = useState(props.model.numberOfGuests);
    const [currDishPromStateLocal, ] = useState({});

    function useForceUpdate() {
        const [, forceUpdate] = useState();
        const reRenderACB = () => forceUpdate(new Object());
      
        return reRenderACB;
      }

      function updateOnPromise(promise, reRender) {
        if (promise) {
          promise.then(reRender).catch(reRender);
          reRender(); 
        }
      }

    const reRenderACB = useForceUpdate();


    function observerACB() {
        setDishes(props.model.dishes);
        setCurrentDish(props.model.currentDish);
        setNumberOfGuests(props.model.numberOfGuests);
        
    }

    //This runs when currentDishLocal is changed...
    function resolvePromiseForCurrentDishACB() {
        const dishDetails = getDishDetails(currentDishLocal);         //getDishDetails returns a promise
        if(currentDishLocal){
            resolvePromise(dishDetails, currDishPromStateLocal);
            updateOnPromise(currDishPromStateLocal.promise, reRenderACB);
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

