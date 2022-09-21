import React, { memo, useState } from "react";
import styled from "styled-components";
import useCanvas from "./../hooks/useCanvas";
import ColorPalette from "./ColorPalette";

const CanvasEl = styled.canvas`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
`;

const CanvasComponent = memo(({ canvasRef }) => <CanvasEl ref={canvasRef} />);

const Canvas = () => {
  const [canvasRef, setActiveObjectFill, canvas] = useCanvas();
  const [isObjectActive, setIsObjectActive] = useState();
  canvas.on('after:render', () => {
    setIsObjectActive(canvas.getActiveObject())
  });
  return (
    <div>
      <CanvasComponent canvasRef={canvasRef} />
      {isObjectActive && <ColorPalette setActiveObjectFill={setActiveObjectFill} />}
    </div>);
};

export default Canvas;
