import React, {useState} from "react";
import Archive from "./Archive";
import Complete from "./Complete";

function formatDate(d) {
  //d = createDate
  let HH = d.getHours();
  let mm = d.getMinutes();
  let ss = d.getSeconds();
  return HH + ":" + mm + ":" + ss;
}

function editHandler(state, setState, item) {
  if(item.editable === false){
    item.editable = true
    setState([...state])
  }
}

const shouldBlur = (e,state,setState,item) => {
  if (e.key === "Enter" && item.editable === true) {
    item.editable = false
    setState([...state])
  }
}

function editChange(state, setState, item, e) {
  item.name = e
  setState([...state])
}
function finishHandler(state, setState, item){

  if(item.status === ""){
    item.status = "finished"
    setState([...state])
    console.log(state)
  }else{
    item.status = ""
    setState([...state])
    console.log(state,3)
  }
}

function deleteHandler(props, setState, index, item) {
  //第一個參數可改成{state}
  const {state} = props;
  if(item.exist === true){
    item.exist = false
    setState([...state])
    // setState([...state.slice(0, index), ...state.slice(index + 1, state.length)]);
    // setState(state.slice(0, index).concat(state.slice(index + 1, state.length)))
  }

}

function Table(props) {
  const [disable, setDisable] = useState(true)
  function handleClick(state, setState, item){

    if(item.display === false){
      item.display = true
      setDisable(!disable)
      setState([...state])
      console.log(state)
    }else if(item.display === true){
      item.display = false
      setDisable(!disable)
      setState([...state])
    }
  }

  if(props.currentIndex === 1){

    return (
      <div className="fancy-table-wrapper">
        <table className="fancy-table">
          <thead>
          <tr>
            <th  style={{width:100}}></th>
            <th  style={{width:200}}>名字</th>
            <th  style={{width:200}}>新增時間</th>
            <th  style={{width:200}}>操作</th>
          </tr>
          </thead>
          <tbody className="content-wrapper">
          {props.state.map((item, index) => (
            item.exist === true ?
            <tr key={item.id} style={{textDecoration: item.status === "finished" ? "line-through": "none"}}>
              <td>{index + 1}</td>
              {(item.editable === false) ? (
                <td onClick={() => editHandler(props.state, props.setState, item)}>
                  <span>{item.name}</span>
                </td>
              ) : (
                <td>
                  <input
                    className="table-input"
                    type="text"
                    value={item.name}
                    onChange={function (e) {
                      editChange(props.state, props.setState, item, e.target.value);
                    }}
                    onKeyPress={(e)=>{shouldBlur(e, props.state, props.setState, item)}}
                  />
                </td>
              )}
              <td>{formatDate(item.createDate)}</td>
              <td>
                <button className="c-icon" onClick={()=>handleClick(props.state, props.setState,item)}>
                  <i className="fas fa-cog"/>
                </button>
              </td>
              <td>
              <span className="adjust-icon">
                  {item.display !== true? " ": <i className="fas fa-check" style={{marginBottom:15}} onClick={()=>finishHandler(props.state, props.setState, item)}/>}
                {item.display !== true? " ": <i className="far fa-trash-alt" onClick={() => deleteHandler(props, props.setState, index,item)}/>}
              </span>
              </td>
            </tr>: ""
          ))}
          </tbody>
        </table>
      </div>
    );
  }else if(props.currentIndex === 2){
    return <Archive props={props} handleClick={handleClick} />
  }else {
    return <Complete props={props} handleClick={handleClick} />
  }

}

export default Table
