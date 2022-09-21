import React from "react";
import {COLORS} from "../shared/constants";
import styled from "styled-components";

const DivEl = styled.div`
  display: flex;
  gap: 5px;
`;

const ColorPalette = (props) => {
  const onChangeFill = (color) => {
    props.setActiveObjectFill(color);
  };
  return (
    <DivEl>
      {COLORS.map(color =>  <button onClick={() => onChangeFill(color)}>{color}</button>)}
    </DivEl>
  );
};

export default ColorPalette;
