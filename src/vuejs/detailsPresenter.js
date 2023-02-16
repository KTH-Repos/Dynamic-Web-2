
import DetailsView from '../views/detailsView.js';




function Details(props){

    console.log(props);
    
    
    return <DetailsView guests = {props.model.numberOfGuests} dishData = {props.model.currentDishPromiseState.data} isDishInMenu={addToMenuACB}/>
    

    function addToMenuACB(dish){
        return false;
    
    }
}



export default Details;