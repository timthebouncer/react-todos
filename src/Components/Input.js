import React, {useState} from "react"


let id = 1;

function InputText(props) {
  const [state, setState] = useState("");
  const {currentIndex} = props
  return (
    currentIndex === 1? <div className="fancy-input">
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
              { id: ++id, name: state, createDate: new Date(), editable:false, status: "", display:false,exist:true, completeTime: []}
            ]);
            setState("");
          }}
        >
          送出
        </button>
      </div>: ""
  );
}
export default InputText
