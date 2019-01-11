import React from "react";

const StarWarsChars = props => {
  let chars = props.character;
  return (
    <li className="Chars">
      <h2>{chars.name}</h2>
      <p>Born: {chars.birth_year}</p>
      <p>Eye: {chars.eye_color}</p>
      <p>Gender: {chars.gender}</p>
      <p>Hair: {chars.hair_color}</p>
      <p>Height: {chars.height}</p>
      <p>Weight: {chars.mass}</p>
      <p>Skin: {chars.skin_color}</p>
    </li>
  );
};

export default StarWarsChars;
