/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graphics or interaction
*/
import resolvePromise from "./resolvePromise";
import { searchDishes, getDishDetails } from "./dishSource";

class DinnerModel{
    constructor(nrGuests=2, dishArray=[]){
        // other model properties will be initialized here in the coming steps
        this.numberOfGuests= nrGuests;
        this.dishes= dishArray;
        this.searchParams = {};
        this.searchResultsPromiseState = {};
        this.currentDishPromiseState= {};
    }

    setNumberOfGuests(nr){
        // if() and throw exercise
        
        if (parseInt(nr) < 1 || Number.isInteger(nr) === false){
            throw new Error ('number of guests not a positive integer');
        }
        // The error message must be exactly "number of guests not a positive integer"
        // To learn how to check for integer, test at the Developer Tools Console: Number.isInteger(3.14)
        
        this.numberOfGuests = nr
        
        // When this is done, the Unit test "TW1.1 DinnerModel/can set the number of guests" should pass
        // also "number of guests is a positive integer"
    }
    addToMenu(dishToAdd){
        // array spread syntax example. Make sure you understand the code below.
        // It sets this.dishes to a new array [   ] where we spread (...) the previous value
        this.dishes= [...this.dishes, dishToAdd];
    }
    
    removeFromMenu(dishToRemove){
        // callback exercise! Also return keyword exercise
        function hasSameIdCB(dish){
            if (dish.id !== dishToRemove.id){
                return true;
            }
            // This will keep the dish when we filter below.
            // That is, we will not keep the dish that has the same id as dishToRemove (if any)
        }
        this.dishes= this.dishes.filter(hasSameIdCB);
        // the test "can remove dishes" should pass
    }
    /* 
       ID of dish currently checked by the user.
       A strict MVC/MVP Model would not keep such data, 
       but we take a more relaxed, "Application state" approach. 
       So we store also abstract data that will influence the application status.
     */
    setCurrentDish(id){
        const dishDetails = getDishDetails(id);
        if(id !== undefined){
            if(id !== this.currentDish){

                resolvePromise(dishDetails, this.currentDishPromiseState);
            }
        }
        this.currentDish= id
        // note that we are adding a new object property (currentDish) which was not initialized in the constructor
    }

    doSearch(searchParams) {
        const promiseToResolve = searchDishes(searchParams);
        resolvePromise(promiseToResolve, this.searchResultsPromiseState);
    }

    setSearchQuery(searchText) {
        this.searchParams.query = searchText;
    }

    setSearchType(searchType) {
        this.searchParams.type = searchType;
    }

}

export default DinnerModel;
