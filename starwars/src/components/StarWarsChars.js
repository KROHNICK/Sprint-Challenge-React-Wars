import React from "react";

const StarWarsChars = props => {
  let chars = props.character;
  return <li className="Chars">{chars.name}</li>;
};

export default StarWarsChars;
