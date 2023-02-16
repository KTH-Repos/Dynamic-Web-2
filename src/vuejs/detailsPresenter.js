
import DetailsView from '../views/detailsView.js';
import promiseNoData from '../views/promiseNoData.js';




function Details(props){

    console.log(props);
    
    
    return <DetailsView guests = {props.model.numberOfGuests} dishData = {props.model.currentDishPromiseState.data} />
    

   
}



export default Details;