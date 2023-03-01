import React from "react";
import { useState, useEffect } from "react";
import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";
import { searchDishes } from "../dishSource";
import resolvePromise from "../resolvePromise";

//searchResultsPromiseState and searchParams are needed from props
function Search(props) {

    console.log("This is results promisestate passed down as props");
    console.log(props.model.searchResultsPromiseState);

    const[searchResultsDataLocal, setSearchResultsData] = useState(props.model.searchResultsPromiseState.data);
    const [, reRender] = useState();
    const [searchType, setSearchType] = useState(props.model.searchParams.type);
    const [searchQuery, setSearchQuery] = useState(props.model.searchParams.query);
    const[promiseState] = useState({})
    function forceReRenderACB() {
        reRender(new Object());
    }

    function updateOnPromise(promise,reRender) {
        if(promise){
            
            promise.then(reRender).catch(reRender);
            reRender();
        }
        
    }

    function lifeACB() {
        if(!props.model.searchResultsPromiseState.promise){
            props.model.doSearch({});//.then(setNewSearchResultsPromise);
            setSearchResultsData(props.model.searchResultsPromiseState.data);
            /*  resolve(props.model.doSearch({}))
            forceReRenderACB(); */
        }
        function ripACB() {
            console.log("cleanup!!");
        }
        return ripACB;
    }

    useEffect(lifeACB, []);

    function handleSearchACB(){
        //props.model.doSearch(props.model.searchParams);
        updateOnPromise(props.model.searchResultsPromiseState.promise, forceReRenderACB)
    }

    function handleTypeChangeACB(type){
        setSearchType(type);
    }

    function handleInputChangeACB(query){
        setSearchQuery(query);

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
            { promiseNoData(props.model.searchResultsPromiseState) || 
            <SearchResultsView resultChosenACB = {handleResultsACB} 
                               searchResults={searchResultsDataLocal}
            />}
          </div>;

    
}

export default Search;
