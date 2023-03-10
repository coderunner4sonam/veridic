import React from "react";
import "./App.css"

function Card({date,link,rendered,protect,excerpt,url,author}) {
  return (
    <div>
    
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={url} alt="Avatar" />
          </div>

          <div className="flip-card-back">
            <h5>{date}</h5>
            <h5>{rendered}</h5>
            <h5>{protect}</h5>
            <h5>{excerpt}</h5>
            <h5>{author}</h5>
            <a href={link}></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

