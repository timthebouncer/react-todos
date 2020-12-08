import React, {useState} from "react"


let id = 1;
let status = false
function InputText(props) {
  const [state, setState] = useState("");
  // id++;
  return (
    <div className="fancy-input">
      <input
        className="fancy-input-bar"
        type="text"
        value={state}
        onChange={function (e) {
          setState(e.target.value);
        }}
        placeholder="請輸入代辦事項"
      />
      <button
        className="fancy-btn"
        onClick={() => {
          props.setState([
            ...props.state,
            { id: ++id, name: state, createDate: new Date(), editable:false, status: "" }
          ]);
          setState("");
        }}
      >
        送出
      </button>
    </div>
  );
}
export default InputText
