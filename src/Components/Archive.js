import React from "react"


function recoverHandler(state, setState, item){
  if(item.exist === false){
    item.exist = true
    setState([...state])
  }
}

function deleteHandler(state, setState, index) {
  console.log(state)
  setState([...state.slice(0, index), ...state.slice(index + 1, state.length)]);
  // setState(state.slice(0, index).concat(state.slice(index + 1, state.length)))
}


function Archive(props){



  return <div className="fancy-table-wrapper">

    <table className="fancy-table">
      <thead>
      <tr>
        <th  style={{width:200}}></th>
        <th  style={{width:200}}>名字</th>
        <th  style={{width:200}}>操作</th>
      </tr>
      </thead>
      <tbody className="content-wrapper">
      {props.props.state.map((item, index) => (
        item.exist === false ? <tr key={item.id} style={{textDecoration: item.status === "finished" ? "line-through": "none"}}>
          <td>{index + 1}</td>

          <td>
            <span>{item.name}</span>
          </td>

          <td>
            <button className="c-icon" onClick={()=>props.handleClick(props.props.state, props.props.setState, item)}>
              <i className="fas fa-cog"/>
            </button>
          </td>
          <td>
              <span className="adjust-icon">
                  {item.display !== true? " ": <i className="fas fa-check" style={{marginBottom:15}}
                                                  onClick={()=>recoverHandler(props.props.state,props.props.setState, item)} />}
                {item.display !== true? " ": <i className="far fa-trash-alt" onClick={()=>deleteHandler(props.props.state,props.props.setState,index)} />}
              </span>
          </td>
        </tr>: ""
      ))}
      </tbody>
    </table>
  </div>
}

export default Archive;
