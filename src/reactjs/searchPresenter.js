import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";
import React from "react";
import { useState, useEffect} from "react";
import resolvePromise from "../resolvePromise";

//searchResultsPromiseState and searchParams are needed from props
export default
function Search(props) {

    const [,reRender] = useState();
    const [promiseState,] = useState(props.model.searchResultsPromiseState);



    function forceRerenderACB(){
        reRender(new Object()); 
    }

    function LifeAndDeath(props){    
        function lifeACB(){
           console.log("E.g. do first search, put results in component state!");
           if(!promiseState.promise){
            resolvePromise(searchDishes({}), promiseState, forceRerenderACB);
        }
           return function ripACB(){  
               console.log("perform cleanup");
           }; 
        }
        useEffect(lifeACB, []);

    

    console.log(props);
    

    function handleSearchACB(){
        props.model.doSearch(props.model.searchParams)
    }

    function handleTypeChangeACB(type){
        props.model.setSearchType(type);
    }

    function handleInputChangeACB(query){
        props.model.setSearchQuery(query);
    }

    function handleResultsACB(dish){
        props.model.setCurrentDish(dish.id)
    }



    
    
    return <div>
   <SearchFormView onInputChange = {handleInputChangeACB} 
    searchTypeCB={handleTypeChangeACB} 
    onSearchingNow={handleSearchACB} 
    dishTypeOptions = {["starter", "main course", "dessert"]}
     />
    { promiseNoData( props.model.searchResultsPromiseState) || 
 	<SearchResultsView resultChosenACB = {handleResultsACB} 
    searchResults={props.model.searchResultsPromiseState.data}
    />}
          </div>;

    
    }
}

