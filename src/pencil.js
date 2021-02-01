import FabricCanvasTool from "./fabrictool";
import { getCursor } from "./utils";

class Pencil extends FabricCanvasTool {
  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingBrush.color = props.lineColor;
    this._canvas.freeDrawingCursor = getCursor('Pencil')
  }
}

export default Pencil;
