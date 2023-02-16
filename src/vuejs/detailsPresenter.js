
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';


function Details(props){

    console.log(props);

    const availableDishes = props.model.dishes;
    const currentDish = props.model.currentDish;
    

    

    function addDishToMenuInModelACB(){
        
        props.model.addToMenu(currentDish);
        
    }

    function isDishAlreadyInMenuACB() {

       if (currentDish === availableDishes ) {
        return true;
       }
        else {
            addDishToMenuInModelACB();
            
        }

       
       
    }

    

    
    
    
    
    return promiseNoData(props.model.currentDishPromiseState) ||  <DetailsView onAddingDishToMenu = {addDishToMenuInModelACB}  guests = {props.model.numberOfGuests} dishData = {props.model.currentDishPromiseState.data} isDishInMenu={isDishAlreadyInMenuACB}/>
    
    
   
}



export default Details;