import {sortDishes,menuPrice,dishType} from "../utilities.js";


function sidebarView(props){

    let numberOfGuests = props.number 
    
    let sortedDishes = sortDishes(props.dishes)
    

    function addByOneACB(num){
        return props.onNumberChange(numberOfGuests + 1)
        
        
        
        
    }

    function subByOneACB(){
        return props.onNumberChange(numberOfGuests - 1)         
        
    }

    
  
    
    return(
        <div>
            <button onClick={subByOneACB}disabled = {numberOfGuests === 1}>-</button>
            {numberOfGuests}
            <button onClick={addByOneACB} >+</button>  
            <table> 
               
                <tbody>
                    {
                        
                        sortedDishes.map(dishTableRowCB)
                        
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td className="aligntotheright">{(menuPrice(props.dishes) *numberOfGuests).toFixed(2)}</td>
                    </tr>
                    
                    
                </tbody>
              </table>
        </div>

     
    )

    
   

    function dishTableRowCB(dish){
        function linkEventACB(){

            
            
            return props.onDishLink(dish)
            
            
        }

        function clickXButtonACB(){
            
            return props.onClickXButtonCustom(dish)
            
        }
    
        
        return <tr key={dish.id}>
                    <td><button onClick={clickXButtonACB}>x</button></td>
                    <td><a href="#/details" onClick={linkEventACB}>{dish.title}</a></td>
                    <td>{dishType(dish)}</td>
                     <td className="aligntotheright">{(dish.pricePerServing * numberOfGuests).toFixed(2)}</td>
                </tr>
               



    }

   
    
}

export default sidebarView