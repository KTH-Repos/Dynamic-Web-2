import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";


function Search(props) {

    console.log(props);

    
    
    return <div>
   <SearchFormView dishTypeOptions = {["starter", "main course", "dessert"]} />
   { promiseNoData(props.model.searchResultsPromiseState) || 
 			<SearchResultsView searchResults={props.model.searchPromiseState.data}/>}
</div>;

    
}

export default Search;
