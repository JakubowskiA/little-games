import React from "react";

export const HomeGameCard = (props) => {
  return (
    <div className="home-game-card">
      <img src={props.image} />
      <p>{props.app.name}</p>
    </div>
  );
};