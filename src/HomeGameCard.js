import React from "react";

export const HomeGameCard = (props) => {
  console.log('hgc', props)
  return (
    <div className="home-game-card" onClick={()=>{props.onClick(props.app.id)}}>
      <img src={props.image} />
      <p>{props.app.name}</p>
    </div>
  );
};