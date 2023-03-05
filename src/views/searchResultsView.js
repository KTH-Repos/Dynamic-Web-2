function SearchResultView(props){

    const searchResults = props.searchResults;
    console.log(props)
    
    function onSpanClicked(e) {
        
        return e.target;
    }

   function createSpansCB(searchResults){
    function clickSpanACB() {
        window.location.hash = "#/details";
        return props.resultChosenACB(searchResults);
    }
    return <span className="span_alignment"  onClick={clickSpanACB} key={searchResults.id} > 
                <img onClick={onSpanClicked}src={searchResults.image} height ="100"></img>
                <div onClick={onSpanClicked}>{searchResults.title}</div>
            </span>     
    } 
     
    return (
        <div className="parent_div" >
            {searchResults.map(createSpansCB)}
        </div>
    )  
}

export default SearchResultView;
