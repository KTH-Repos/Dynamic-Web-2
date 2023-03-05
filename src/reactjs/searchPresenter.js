//import React from "react";
import { useState,useEffect } from "react";
import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";


function Search(props) {

    function useForceUpdate() {
        const [, forceUpdate] = useState();
        const reRenderACB = () => forceUpdate(new Object());
      
        return reRenderACB;
    }

    //custom hook used for force re-rendering
    const reRenderACB = useForceUpdate();

    function updateOnPromise(promise, reRender) {
        if (promise) {
            promise.then(reRender).catch(reRender);
            reRender();  
        }
    }

    function lifeACB(){
        if(!props.model.searchResultsPromiseState.promise) {
            props.model.doSearch({});
            updateOnPromise(props.model.searchResultsPromiseState.promise, reRenderACB);
        }
    }
 
    useEffect(lifeACB,[]);   

    function handleSearchACB(){
        props.model.doSearch(props.model.searchParams);
        updateOnPromise(props.model.searchResultsPromiseState.promise, reRenderACB);
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

    return (<div>
                <SearchFormView onInputChange = {handleInputChangeACB} 
                        searchTypeCB={handleTypeChangeACB} 
                        onSearchingNow={handleSearchACB} 
                        dishTypeOptions = {["starter", "main course", "dessert"]}
                />
                
                { promiseNoData( props.model.searchResultsPromiseState) || 
                <SearchResultsView resultChosenACB = {handleResultsACB} 
                                   searchResults={props.model.searchResultsPromiseState.data}
                />}
          </div>);

    
}

export default Search;
