function SearchFormView(props){
    
    const dishTypeOptions = props.dishTypeOptions
    //console.log(props);
    
    function onChangeInputCB(e){
        return props.onInputChange(e.target.value);
    }
    
    function startSearchCB(e){
        
        return props.onSearchingNow();
        
    }

    function navigateACB(){
        window.location.hash = "#/summary";
    }
    
    function onChangeOptionCB(e) {
        return props.searchTypeCB(e.target.value);
    }
    
    function addOptionsCB(dishTypeOptions) {
        return <option key={dishTypeOptions} value={dishTypeOptions}>{dishTypeOptions}</option>
    }

    return(
        <div>
            <input onChange={onChangeInputCB}>type here</input>
            <select onChange={onChangeOptionCB}> 
                <option key="Choose" value="">Choose:</option>
                {dishTypeOptions.map(addOptionsCB)}
            </select>
            <button onClick={startSearchCB}>Search!</button>
            <button onClick={navigateACB}>summary</button>
        </div>
    )
}

export default SearchFormView;