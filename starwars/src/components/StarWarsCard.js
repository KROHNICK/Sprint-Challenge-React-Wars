import React from "react";

import StarWarsChars from "./StarWarsChars";

const StarWarsCard = props => {
  return (
    <ul className="StarWarsCharsList">
      {props.characters.map((starWarsCharacter, i) => {
        return (
          <li className="StarWarsCard" key={i}>
            {starWarsCharacter.name}
          </li>
        );
      })}
    </ul>
  );
};

export default StarWarsCard;
