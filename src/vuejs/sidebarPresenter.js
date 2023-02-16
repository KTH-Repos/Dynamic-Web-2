import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    
    return <SidebarView number ={props.model.numberOfGuests} dishes = {props.model.dishes} onNumberChange = {changeGuestsACB} onDishLink = {setDishACB} onClickXButtonCustom = {removeDishACB}/>;

    function changeGuestsACB(number){
        console.log(number);
        
        return props.model.setNumberOfGuests(number)
    }

    function setDishACB(dish){
        const chosenDish = props.model.setCurrentDish(dish.id)
        return chosenDish
    }

    function removeDishACB(dish){
        return props.model.removeFromMenu(dish)
    }
}
