import React from "react";
import './App.css';
import InputText from "./Components/Input";
import Table from "./Components/Table";
import Tabs from "./view/components";

const { useState, useEffect } = React;
const header = [{ id: 1, name: "frank", createDate: new Date(), editable:false,status: "", display:false, exist:true, completeTime:[]}];


function App() {
  const [state, setState] = useState([]);
  const [currentIndex, setIndex] = useState(1)
  //已刪除陣列
  const pending = state.filter(function (item){
    return item.exist === true && item.status === ""
  })

  const list = state.filter(function (item){
    return item.exist === false
  })
  const complete = state.filter(function (item){
    return item.status === "finished"
  })


  useEffect(function () {
    switch (currentIndex) {
      case 1:setIndex(1)
        break;
      case 2: if(list.length <= 0){
        alert("沒有被刪除代辦事項")
        setIndex(1)
      }
        break;
      case 3:setIndex(3)
    }
  });

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
        <Tabs pending={pending} list={list} complete={complete} state={state} currentIndex={currentIndex} setIndex={setIndex}/>
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
