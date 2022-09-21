import { useState, useEffect, useRef, useCallback } from "react";
import createFabricCanvas from "./../studio/canvas";
import createFabricObject from "./../studio/object";

const useCanvas = () => {
  const ref = useRef();
  const [canvas] = useState(createFabricCanvas());

  useEffect(() => {
    canvas.initialize(ref.current, {
      width: window.innerWidth,
      height: (window.innerHeight- 40),
    });

    const customObject1 = createFabricObject({ top: 100, left: 100 });
    const customObject2 = createFabricObject({ top: 200, left: 200, fill: "red" });
    const customObject3 = createFabricObject({ top: 300, left: 300, fill: "blue" });

    canvas.add(customObject1, customObject2, customObject3);

    canvas.renderAll();
  }, [canvas]);

  const setRef = useCallback((node) => {
    ref.current = node;
  }, []);

  const setActiveObjectFill = (color) => {
    if (canvas.getActiveObject()) {
      canvas.getActiveObject().set("fill", color);
      canvas.renderAll();
    }
  }

  return [setRef, setActiveObjectFill];
};

export default useCanvas;
