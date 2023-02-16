
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';
import { getDishDetails } from '../dishSource.js';
import DinnerModel from '../DinnerModel.js';




function Details(props){

    console.log(props);
    
    
    return promiseNoData(props.model.currentDishPromiseState) ||  <DetailsView isDishInMenu={addToMenuACB} guests = {props.model.numberOfGuests} dishData = {props.model.currentDishPromiseState.data} />
    
   function addToMenuACB(dish){
    
    
    return props.model.addToMenu(dish)
   }

   
}



export default Details;