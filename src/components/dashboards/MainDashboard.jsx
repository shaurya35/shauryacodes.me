import React from "react";

const MainDashboard = ({
  number,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
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

  return (
    <div className="px-12 pt-7 flex w-[975px] text-[16px] font-fira-code">
      <div>{items}</div>
      <div className="pl-11 h-80">
        <div>{h1}</div>
        <br />
        <div>
          {l1}
          <br />
          {l2}
          <br />
          {l3}
          <br />
          {l4}
        </div>
        <br />
        <br />
        <div>{h2}</div>
        <br />
        <div>
          {l5}
          <br />
          {l6}
          <br />
          {l7}
          <br />
          {l8}
        </div>
        <br />
        <br />
        <div>{h3}</div>
        <br />
        <div>
          {l9}
          <br />
          {l10}
          <br />
          {l11}
          <br />
          {l12}
        </div>
        <br />
        <br />

        <div>{h4}</div>
        <br />
        <div>
          {l13}
          <br />
          {l14}
          <br />
          {l15}
          <br />
          {l16}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
