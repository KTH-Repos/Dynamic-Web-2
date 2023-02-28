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
        this.arrayForObserver = [];         //this will make contain observers of Model
    }

    setNumberOfGuests(nr) {
        if (parseInt(nr) < 1 || Number.isInteger(nr) === false) {
          throw new Error("number of guests not a positive integer");
        }
      
        if (nr !== this.numberOfGuests) { // Only notify observers if nr is different from numberOfGuests
          this.numberOfGuests = nr;
          this.notifyObservers(this.numberOfGuests);
        }
    }
    addToMenu(dishToAdd){
        function checkSameIdCB(dish){
            return dish.id === dishToAdd.id
        }
        if (!this.dishes.some(checkSameIdCB)) {
            this.dishes = [...this.dishes, dishToAdd];
            this.notifyObservers(this.dishes);
        }
    }
    
    removeFromMenu(dishToRemove){
        // callback exercise! Also return keyword exercise
        const lengthAtFirst = this.dishes.length;
        function hasSameIdCB(dish){
            if (dish.id !== dishToRemove.id){
                return true;
            }
            // This will keep the dish when we filter below.
            // That is, we will not keep the dish that has the same id as dishToRemove (if any)
        }
        this.dishes= this.dishes.filter(hasSameIdCB);

        if (this.dishes.length < lengthAtFirst){
            this.notifyObservers(this.dishes);
        }
        
        

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
        if(this.currentDish !== id) {
            this.currentDish = id;
            // note that we are adding a new object property (currentDish) which was not initialized in the constructor
            this.notifyObservers(this.currentDish);
        }
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

    addObserver(callback) {
        this.arrayForObserver.push(callback);
    }

    removeObserver(callback) {
        function filterObserversCB(observer){
            return observer !== callback;
        }
        const arr = this.arrayForObserver.filter(filterObserversCB);
        this.arrayForObserver = arr;
    }

    notifyObservers(data) {
        function callObserverCB(observer) {
            try {
                observer(data);  
            } catch (error) {
                console.log(error);
            }
        }
        this.arrayForObserver.forEach(callObserverCB); 
    }
}

export default DinnerModel;
