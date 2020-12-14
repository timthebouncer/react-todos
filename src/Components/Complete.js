import React from "react"

function formatDate(d) {
  //d = createDate
  let HH = d.getHours();
  let mm = d.getMinutes();
  let ss = d.getSeconds();
  return HH + ":" + mm + ":" + ss;
}

function deleteHandler(state, setState, index) {
  console.log(state)
  setState([...state.slice(0, index), ...state.slice(index + 1, state.length)]);
  // setState(state.slice(0, index).concat(state.slice(index + 1, state.length)))
}

function Complete(props){
  const {finishHandler} = props

  return <div className="fancy-table-wrapper">

    <table className="fancy-table">
      <thead>
      <tr>
        <th  style={{width:200}}></th>
        <th  style={{width:200}}>名字</th>
        <th  style={{width:200}}>完成時間</th>
        <th  style={{width:200}}>操作</th>
      </tr>
      </thead>
      <tbody className="content-wrapper">
      {props.props.state.map((item, index) => (
        item.status === "finished" ?
        <tr key={item.id} style={{textDecoration: item.status === "finished" ? "line-through": "none"}}>
          <td>{index + 1}</td>

          <td>
            <span>{item.name}</span>
          </td>
           <td>{formatDate(item.completeTime)}</td>
          <td>
            <button className="c-icon" onClick={()=>props.handleClick(props.props.state, props.props.setState, item)}>
              <i className="fas fa-cog"/>
            </button>
          </td>
          <td>
            <td>
              <span className="adjust-icon">
                  {item.display !== true? " ": <i className="fas fa-check" onClick={()=>finishHandler(props.props.state, props.props.setState, item)}
                                                  style={{marginBottom:15}} />}
                {item.display !== true? " ": <i className="far fa-trash-alt" onClick={()=>deleteHandler(props.props.state,props.props.setState,index)} />}
              </span>
            </td>
          </td>

        </tr>: <tr></tr>
      ))}
      </tbody>
    </table>
  </div>
}

export default Complete;
