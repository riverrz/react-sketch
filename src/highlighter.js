import FabricCanvasTool from './fabrictool'
import { hexToRgbA, colorNameToHex, getCursor } from './utils';

class Highlighter extends FabricCanvasTool {

  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingCursor = getCursor('Highlighter')
    this._canvas.freeDrawingBrush.color = props.lineColor.indexOf('#') > -1 ? hexToRgbA(props.lineColor) : hexToRgbA(colorNameToHex(props.lineColor));
  }
}

export default Highlighter; 