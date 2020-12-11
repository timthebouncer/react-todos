import React from "react"

function Complete(props){

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
        item.status === "finished" ?
        <tr key={item.id} style={{textDecoration: item.status === "finished" ? "line-through": "none"}}>
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
            <td>
              <span className="adjust-icon">
                  {item.display !== true? " ": <i className="fas fa-check" style={{marginBottom:15}} />}
                {item.display !== true? " ": <i className="far fa-trash-alt" />}
              </span>
            </td>
          </td>

        </tr>: ""
      ))}
      </tbody>
    </table>
  </div>
}

export default Complete;
