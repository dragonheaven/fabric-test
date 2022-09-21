import React from "react";
import {COLORS} from "../shared/constants";
import styled from "styled-components";

const DivEl = styled.div`
  display: flex;
  gap: 5px;
`;

const ColorPalette = ({setActiveObjectFill}) => {
  const onChangeFill = (color) => {
    setActiveObjectFill(color);
  };
  return (
    <DivEl>
      {COLORS.map(color =>  <button key={color} onClick={() => onChangeFill(color)}>{color}</button>)}
    </DivEl>
  );
};

export default ColorPalette;
