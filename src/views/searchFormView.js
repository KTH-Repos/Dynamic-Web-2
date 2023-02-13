function SearchFormView(props){
    
    const dishTypeOptions = props.dishTypeOptions
    //console.log(props);
    
    function onChangeInputCB(e){
        return props.searchTextACB(e.target.value);
    }
    
    function startSearchCB(e){
        return props.searchNowACB();
    }
    
    function onChangeOptionCB(e) {
        return props.searchTypeCB(e.target.value);
    }
    
    function addOptionsCB(dishTypeOptions) {
        return <option value={dishTypeOptions}>{dishTypeOptions}</option>
    }

    return(
        <div>
            <input onChange={onChangeInputCB}>type here</input>
            <select onChange={onChangeOptionCB}> 
                <option value="">Choose:</option>
                {dishTypeOptions.map(addOptionsCB)}
            </select>
            <button onClick={startSearchCB}>Search!</button>
        </div>
    )
}

export default SearchFormView;