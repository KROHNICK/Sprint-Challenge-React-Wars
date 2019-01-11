import React from "react";

import StarWarsChars from "./StarWarsChars";

const StarWarsCard = props => {
  return (
    <ul className="StarWarsCharsList">
      {props.characters.map((starWarsCharacter, i) => {
        return (
          <li className="StarWarsCard" key={i}>
            <h2>{starWarsCharacter.name}</h2>
            <p>Born: {starWarsCharacter.birth_year}</p>
            <p>Eye: {starWarsCharacter.eye_color}</p>
            <p>Gender: {starWarsCharacter.gender}</p>
            <p>Hair: {starWarsCharacter.hair_color}</p>
            <p>Height: {starWarsCharacter.height}</p>
            <p>Weight: {starWarsCharacter.mass}</p>
            <p>Skin: {starWarsCharacter.skin_color}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default StarWarsCard;
