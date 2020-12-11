import React,{useState} from 'react';

function Tabs(props){
  const {setIndex} = props

  const tabs=[
    {tabName:"待處理",id:1},
    {tabName:"已刪除",id:2},
    {tabName:"已完成",id:3},
  ];


  function tabChoiced(id){
    setIndex(id)
  }

  // const isBox1Show=currentIndex===1 ? 'block' : 'none';
  // const isbox2Show=currentIndex===2 ? 'block' : 'none';
  // const isbox3Show=currentIndex===3 ? 'block' : 'none';

  const tabList= tabs.map(function(res,index) {
  const tabStyle= 'fancy-tab-btn'
  return <button key={index} onClick={()=>tabChoiced(res.id)} className={tabStyle}>{res.tabName}</button>
  });
  return (
    <div className="tab-wrapper">
      <div className="tab-btn">
        {tabList}
      </div>
      {/*<div className="tab-btn">*/}
      {/*  <div style={{"display":isBox1Show}} >*/}

      {/*  </div>*/}
      {/*  <div style={{"display":isbox2Show}}>*/}

      {/*  </div>*/}
      {/*  <div style={{"display":isbox3Show}}>*/}

      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )

}

export default Tabs;
