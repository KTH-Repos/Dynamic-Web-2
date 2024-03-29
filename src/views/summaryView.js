import {sortIngredients} from "../utilities.js";

/* Functional JSX component. Name must start with capital letter */
function SummaryView(props){

  function navigateACB(){
    window.location.hash = "#/search";
  }

  
  
    return (
            <div class="debug">
              Summary for <span title="nr guests">{props.people}</span> persons:

            
              
              <table>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript, and make a comment
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                  }
                
                <tbody>
                  {  
                      
                      sortIngredients(props.ingredients).map(ingredientTableRowCB)
                      

                      // TODO once the table rendering works, sort ingredients before mapping. Import the needed function from utilities.js  
                      
                  }
                </tbody>
              </table>
              <button onClick={navigateACB}>nav to search</button>
            </div>
    );
    /* for TW1.5 
      Note also that the callback can be defined after it is used! 
      This JS feature is called "function hoisting".
    */
    function ingredientTableRowCB(ingr){
        return <tr key={ /* TODO what's a key? */ingr.id } >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td class="numtablerow">{(ingr.amount * props.people).toFixed(2)} {/* multiply by number of people! Display with 2 decimals, use a CSS classs to align right */}</td>
                 <td> {ingr.unit} </td>
               </tr>;
    }
}

export default SummaryView;
