import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';


function Details(props){

    const dishes = props.model.dishes;
    const currentDish = props.model.currentDish;
    const data = props.model.currentDishPromiseState.data
    const numberOfGuests = props.model.numberOfGuests;
    

    function addDishToMenuInModelACB(){
        
        props.model.addToMenu(data);
        
    }

    function isDishAlreadyInMenuACB(dish) {

        return currentDish === dish.id;

    }

    
    return promiseNoData(props.model.currentDishPromiseState) ||  <DetailsView onAddingDishToMenu = {addDishToMenuInModelACB}  guests = {numberOfGuests}
     dishData = {data} isDishInMenu={dishes.filter(isDishAlreadyInMenuACB).length > 0}/>

   
}



export default Details;