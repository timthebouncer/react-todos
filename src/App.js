import React from "react";
import './App.css';
import InputText from "./Components/Input";
import Table from "./Components/Table";
import Tabs from "./view/components";

const { useState, useEffect } = React;
const header = [{ id: 1, name: "frank", createDate: new Date(), editable:false,status: "", display:false, exist:true }];


function App() {
  const [state, setState] = useState([]);
  const [currentIndex, setIndex] = useState(1)
  // const [disable, setDisable] = useState(true);
  useEffect(
    function () {
      setTimeout(function () {
        setState(header);
      }, 300);
      //能夠引起useEffect的依賴
    }, []);
  return (
    <div className="container">
      <div className="tab-wrapper">
        <Tabs currentIndex={currentIndex} setIndex={setIndex}/>
      </div>
      <div className="App">
        <h1>ToDo List</h1>
        <InputText state={state} setState={setState} currentIndex={currentIndex} setIndex={setIndex}/>
        <Table state={state} setState={setState} currentIndex={currentIndex} setIndex={setIndex}/>
      </div>
    </div>

  );
}

export default App;
