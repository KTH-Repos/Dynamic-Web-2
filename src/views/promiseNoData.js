
function promiseNoData(props){
    
    
    const newData = JSON.parse(JSON.stringify(props));
    
    return(
        <div>
          {promiseNoData(newData)}
        </div>
    )

}

export default promiseNoData;