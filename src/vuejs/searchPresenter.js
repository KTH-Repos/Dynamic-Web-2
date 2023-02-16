import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import promiseNoData from "../views/promiseNoData";


function Search(props) {

    console.log(props);
    
    return <div>
   <SearchFormView dishTypeOptions = {props.model} />
   { promiseNoData(props.model.searchPromiseState) || 
 			<SearchResultsView searchResults={props.model.searchPromiseState.data}/>}
</div>;

    
}

export default Search;
