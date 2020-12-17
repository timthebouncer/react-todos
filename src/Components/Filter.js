import React from "react"


function Filter(props){
  console.log(props)
  function sortEx() {

    const timeSort = props.props.state.filter(item=>{
      return item.createDate
    })
    console.log(timeSort)
    timeSort.sort(function(a, b){
      return a < b ? 1 : -1;
    })
    props.props.setState([...timeSort])
  }

  return <div style={{"margin-left": 5}}>
    <span><i className="fas fa-sort-up" onClick={()=>sortEx()}></i></span>
    {/*<span><i className="fas fa-sort-down"></i></span>*/}
  </div>
}

export default Filter;
