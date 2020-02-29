import React from "react";
import backOfCard from "./back.png";
import {useFlip} from './hooks'
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flip, flipCard] = useFlip();
  return (
    <img
      src={flip ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
