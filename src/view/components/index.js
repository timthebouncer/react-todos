import React from 'react';

function Tabs(props){
  const {setIndex} = props

  const tabs=[
    {tabName:"待處理",id:1,total:props.pending.length},
    {tabName:"已刪除",id:2,total:props.list.length},
    {tabName:"已完成",id:3,total:props.complete.length},
  ];


  function tabChoiced(id){
    setIndex(id)
  }

  const tabList= tabs.map(function(res,index) {
  const tabStyle= 'fancy-tab-btn'
  return <button key={index} onClick={()=>tabChoiced(res.id)} className={tabStyle}>{res.tabName}{res.total}</button>
  });
  return (
    <div className="tab-wrapper">
      <div className="tab-btn">
        {tabList}
      </div>
    </div>
  )

}

export default Tabs;
