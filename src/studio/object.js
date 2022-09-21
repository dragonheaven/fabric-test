import { fabric } from "fabric";

fabric.CustomObject = fabric.util.createClass(fabric.Rect, {
  initialize: function (options) {
    this.callSuper("initialize", {
      width: 200,
      height: 200,
      fill: "yellow",
      ...options,
    });
  },
});

const createFabricObject = (options) => {
  return new fabric.CustomObject(options);
};

export default createFabricObject;
