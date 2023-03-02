import { useState,useEffect } from "react";
import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";


function Search(props) {

    const[, setSearchResultsPromise] = useState(props.model.searchResultsPromiseState);
    const [,reRender] = useState("");


    function forceReRenderACB(){
        return reRender(new Object());
    }

    function extractDataFromPromsie() {
        setSearchResultsPromise(props.model.searchResultsPromiseState.data);
    }
    
    function extractErrorFromPromise(){
        setSearchResultsPromise(props.model.searchResultsPromiseState.error);
    }


    function lifeACB(){
        if(!props.model.searchResultsPromiseState.promise){
            props.model.doSearch({})
            props.model.searchResultsPromiseState.promise.then(extractDataFromPromsie);
            forceReRenderACB();
        }
    }

     useEffect(lifeACB, []);   

    
    


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

export default Search;
