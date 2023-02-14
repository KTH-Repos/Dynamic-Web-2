function SearchResultView(props){

    //TODO: Fix css!!
    
    const searchResults = props.searchResults;
    console.log(props)
    
    

    function onSpanClicked(e) {
        return e.target;
    }

   function createSpansCB(searchResults){
    function clickSpanACB() {
        return props.resultChosenACB(searchResults);
    }
    return <span onClick={clickSpanACB} key={searchResults.id} className = 'someClass'> 
                <img onClick={onSpanClicked}src={searchResults.image} height ="100"></img>
                <div onClick={onSpanClicked}>{searchResults.title}</div>
            </span>
    }   


    return (
        <div>
            {searchResults.map(createSpansCB)}
        </div>
    )  
}

export default SearchResultView;
