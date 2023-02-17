import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";
import DinnerModel from "../DinnerModel";


function Search(props) {

    const promise = props.model.searchResultsPromiseState.promise;
    const searchPromiseState = props.model.searchPromiseState;
    const searchResultsPromiseState = props.model.searchResultsPromiseState;
    const data = props.model.searchResultsPromiseState.data;
    console.log(props.model.searchResultsPromiseState);
    

    console.log(props);
    if(!promise){
        props.model.doSearch()
    }

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
   <SearchFormView onInputChange = {handleInputChangeACB} searchTypeCB={handleTypeChangeACB} onSearchingNow={handleSearchACB} dishTypeOptions = {["starter", "main course", "dessert"]} />
   { promiseNoData( searchResultsPromiseState) || 
 			<SearchResultsView resultChosenACB = {handleResultsACB} searchResults={data}/>}
          </div>;

    
}

export default Search;
