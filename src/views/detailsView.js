function DetailsView(props){

    //TODO: Handle CSS

    const dishIngredients = props.dishData.extendedIngredients;
    
    console.log(props)

    function extractIngredientNameCB(dish) {
        return <span>{dish.name}: {(dish.amount)} {dish.unit}<br/></span>
    }

    function addDishToMenuACB() {
        return props.addToMenuACB()  
    }

    function removeDishFromMenuACB(e) {
        console.log(e.target); 
    }
   
    return (
        <div className="flex_alignment">
            {/* Ths div is for dish info */}
            <div>
                <header>{props.dishData.title}</header>
                
                <div className="flex_alignment">
                    <img src={props.dishData.image} height="100"></img>
                    <div>
                        <span> price : {props.dishData.pricePerServing} 
                        <br/>  for {props.guests} guests: {(props.guests * props.dishData.pricePerServing).toFixed(2)}</span>
                    </div>
                </div> 
                <br/>
                <span>{dishIngredients.map(extractIngredientNameCB)}</span>
                <br/>
                <span> Instructions :  {props.dishData.instructions}</span>
                <br/>
                <a href={props.dishData.sourceUrl}> more information</a>
            </div>
            <div>
                <button disabled = {props.isDishInMenu === true} onClick={addDishToMenuACB}>Add to menu!</button>
                <button  onClick={removeDishFromMenuACB}>Cancel</button>

            </div>
            

        </div>
    )
    
}


export default DetailsView;