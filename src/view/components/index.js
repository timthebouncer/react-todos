import React from 'react'
// import Table from "../../Components/Table";
// import Archive from "../../Components/Archive";

function TabList(props) {

  return <div>
    <ul>
      {props.list.map(item=>{
        return (
            <Tab item={item} />
        )
      })}
    </ul>
  </div>
}

function Tab(props) {
  const {item} = props
  return <div>
    <button>
      {item.title}
    </button>
  </div>
}

function Tabs(){
  const list=[{title:"tab1",content:"123"},{title:"tab2",content:"456"},{title:"tab3",content:"789"}];



  return<div>

      <TabList list={list}/>
    {/*<button>待處理</button>*/}
    {/*<button>刪除</button>*/}
    {/*<button>已完成</button>*/}
  </div>
}

export default Tabs;
