function promiseNoData(props) {
  //console.log(props.error)
  if (!props || !props.promise) {
    return (
      <div>
        No Data
      </div>
    )
  }

  if (props.promise && !props.data && !props.error) {
    return (
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" className="hello" />
      
    )
  }

  if (props.promise && !props.data && props.error) {
    return (
      <div>
        dummy error to show
      </div>
    )
  }

  if (props.promise && props.data && !props.error) {
    return false;
  }
}

export default promiseNoData;