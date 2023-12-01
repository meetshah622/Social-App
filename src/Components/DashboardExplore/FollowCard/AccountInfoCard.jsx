import React from "react";
import "./AccountInfoCardStyle.scss";
export default function AccountInfoCard() {
  const CardInfo = () => (
    <div>
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
  return (
    <div className="accountInfoCardWrapper">
      <CardInfo info={{
        name:'Cammy Hedling',
        city:'Los Angeles, CA',
        
      }}/>
    </div>
  );
}
