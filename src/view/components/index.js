import React from 'react'
import Table from "../../Components/Table";
import Archive from "../../Components/Archive";


function Tab(){

  function gotoPending(){
    return <div><Table/></div>
  }

  function gotoArchive(){
    return <Archive/>
  }

  return<div>
    <button onClick={()=>gotoPending()}>待處理</button>
    <button onClick={()=>gotoArchive()}>刪除</button>
    <button>已完成</button>
  </div>
}

export default Tab;
