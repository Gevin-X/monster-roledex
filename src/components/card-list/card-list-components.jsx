import React from "react";
import {Card} from "../card/card.component.jsx";
import './card-list.styles.css'

export const Cardlist = props =>(
  //  console.log(props);
    <div className="card-list">
      {props.monsters.map( monster => (
    <Card key={ monster.id} monster = {monster}></Card> ))}
    </div>
)