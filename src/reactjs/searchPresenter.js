import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";
import React from "react";
import { useState, useEffect} from "react";
import resolvePromise from "../resolvePromise";
import { searchDishes } from "../dishSource";

//searchResultsPromiseState and searchParams are needed from props
export default
function Search(props) {

    const [,reRender] = useState();
    const [promiseState,] = useState({});
    const [searchType, setSearchType] = useState(props.model.searchParams.type);
    const [searchQuery, setSearchQuery] = useState(props.model.searchParams.query);
    
    console.log(props)
    function forceRerenderACB(){ 
        reRender(new Object()); 
    }


    // Component lifecycle hooks
    function lifeACB() {
        // Perform first search if results are not available
        if (!props.model.searchResultsPromiseState.promise) {
          props.model.doSearch(props.model.searchParams);
        }
      }
  
      function ripACB() {
        console.log("perform cleanup");
      }
    

    function handleSearchACB(){ 
        resolvePromise(searchDishes({type : searchType, query: searchQuery}), promiseState, forceRerenderACB);
    }

    function handleTypeChangeACB(type){
        setSearchType(type);
    }

    function handleInputChangeACB(query){
        setSearchQuery(query)
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
    { promiseNoData(promiseState) || 
 	<SearchResultsView resultChosenACB = {handleResultsACB} 
    searchResults={promiseState.data}
    />}
          </div>;

    
    }


