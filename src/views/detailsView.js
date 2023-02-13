function DetailsView(props){

    //TODO: Handle CSS

    const dishIngredients = props.dishData.extendedIngredients;
    
    console.log(props)

    function extractIngredientNameCB(dish) {
        //console.trace();
        return <span>{dish.name}: {(dish.amount)* props.guests} {dish.unit}<br/></span>
    }

    
   
    return (
        <div>
            <header>{props.dishData.title}</header>
            <div className="DoSomethinghere">
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
    )
    
}


export default DetailsView;