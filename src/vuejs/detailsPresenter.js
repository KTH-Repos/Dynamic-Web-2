
import DetailsView from '../views/detailsView.js';
import { getDishDetails } from '../dishSource.js';




function Details(props){

   
        
    
    return <DetailsView guests = {props.model.numberOfGuests} dishData = {props.model.currentDishPromiseState.data} />
    

    
}



export default Details;