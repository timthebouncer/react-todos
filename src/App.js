import React from "react";
import './App.css';
import InputText from "./Components/Input";
import Table from "./Components/Table";
import Tab from "./view/components";

const { useState, useEffect } = React;
const header = [{ id: 1, name: "frank", createDate: new Date(), editable:false,status: "", display:false }];



function App() {
  const [state, setState] = useState([]);

  // const [disable, setDisable] = useState(true);
  useEffect(
    function () {
      setTimeout(function () {
        setState(header);
      }, 300);
      //能夠引起useEffect的依賴
    }, []);
  return (
    <div>
      <div>
      </div>
      <div className="App">
        <h1>ToDo List</h1>
        <InputText state={state} setState={setState}/>
        <Table state={state} setState={setState}/>
      </div>
    </div>

  );
}

export default App;
