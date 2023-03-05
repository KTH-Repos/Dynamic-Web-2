function DetailsView(props){

    //TODO: Handle CSS

    const dishIngredients = props.dishData.extendedIngredients;
    const dishIsInMenu = props.isDishInMenu;
    
    console.log(props);

    function navigateACB(){
        window.location.hash = "#/search";
      }

    

    function extractIngredientNameCB(dish) {
        return <span>{dish.name}: {(dish.amount)} {dish.unit}<br/></span>
    }

    function addDishToMenuACB(dish) {
      // if(dishIsInMenu) {
    window.location.hash = "#/search";      
      props.onAddingDishToMenu(dish);  
      // }
    }

    function removeDishFromMenuACB(e) {
        console.log(e.target); 
    }
   
    return (
        <div >
            {/* Ths div is for dish info */}
            <div>
                <header><h2>{props.dishData.title}</h2></header>
                
                <div >
                    <img className="img-size" src={props.dishData.image} height="100"></img>
                    <div >
                        <button className="inline"  disabled = {props.isDishInMenu} onClick={addDishToMenuACB}>Add to menu!</button>
                        <button className="inline"  onClick={navigateACB}>Cancel</button>

                    </div>
                    
                    
                </div>
                    <h4><span> price : {props.dishData.pricePerServing} 
                        <br/>  for {props.guests} guests: {(props.guests * props.dishData.pricePerServing).toFixed(2)}</span></h4>
                <br/>
                <span>{dishIngredients.map(extractIngredientNameCB)}</span>
                <br/>
                <span className="fixed-width">{props.dishData.instructions}</span>
                <br/>
                <a href={props.dishData.sourceUrl}> more information</a>
            </div>
           

        </div>
    )
    
}


export default DetailsView;