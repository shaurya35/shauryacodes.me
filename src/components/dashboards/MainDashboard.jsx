import React from "react";

const MainDashboard = ({
  number,
  h1,
  h2,
  h3,
  h4,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  l11,
  l12,
  l13,
  l14,
  l15,
  l16,
}) => {
  const items = [];

  for (let i = 1; i <= number; i++) {
    items.push(<div key={i}>{i}</div>);
  }

  const renderList = (items, addDoubleBreak = false) => {
    return items.map((item, index) => item && <div key={index}>{item}<br /></div>)
      .concat(addDoubleBreak ? [<br key="double-break" />] : []);
  };

  return (
    <div className="px-12 pt-7 flex w-[975px] text-[16px] font-fira-code">
      <div>{items}</div>
      <div className="pl-11 h-80">

        <div>{h1}</div>
        <br /> 
        {renderList([l1, l2, l3, l4], true)}
        <br />

        <div>{h2}</div>
        <br /> 
        {renderList([l5, l6, l7, l8], true)}  
        <br />

        <div>{h3}</div>
        <br />
        {renderList([l9, l10, l11, l12], true)}  
        <br />

        <div>{h4}</div>
        <br /> 
        {renderList([l13, l14, l15, l16])}
      </div>
    </div>
  );
};

export default MainDashboard;
