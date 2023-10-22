import React from "react";
import { useNavigate } from "react-router-dom";

export const CarouselItem = ({ item, width }) => {

  const navigate =useNavigate()

  return (
    <div className="carousel_item" style={{ width: width }}>
      <div className="layer"></div>
      <img className="carousel_img" alt="" src={item.image} />
      <div
     
        className=  "carousel_item_text"
        
      >
        <h1>{item.heading}</h1>
        <p>{item.text}</p>
        <button >More info</button>
      </div>
    </div>
  );
};
