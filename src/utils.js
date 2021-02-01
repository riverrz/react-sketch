/**
 * Determine the mouse position
 *
 * @param event the canvas event
 * @returns *[] tuple of position x,y
 * @private
 */
export const pointerPosition = (event) => {
  event = event || window.event;
  var target = event.target || event.srcElement,
    style = target.currentStyle || window.getComputedStyle(target, null),
    borderLeftWidth = parseInt(style["borderLeftWidth"], 10),
    borderTopWidth = parseInt(style["borderTopWidth"], 10),
    rect = target.getBoundingClientRect(),
    _x = event.clientX - borderLeftWidth - rect.left,
    _y = event.clientY - borderTopWidth - rect.top,
    _touchX = event.changedTouches
      ? event.changedTouches[0].clientX - borderLeftWidth - rect.left
      : null,
    _touchY = event.changedTouches
      ? event.changedTouches[0].clientY - borderTopWidth - rect.top
      : null;
  return [_x || _touchX, _y || _touchY];
};

/**
 * Calculate the distance of two x,y points
 *
 * @param point1 an object with x,y attributes representing the start point
 * @param point2 an object with x,y attributes representing the end point
 *
 * @returns {number}
 */
export const linearDistance = (point1, point2) => {
  let xs = point2.x - point1.x;
  let ys = point2.y - point1.y;
  return Math.sqrt(xs * xs + ys * ys);
};

/**
 * Return a random uuid of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * @returns {string}
 */
export const uuid4 = () => {
  let uuid = "",
    ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += "-";
        uuid += ((Math.random() * 16) | 0).toString(16);
        break;
      case 12:
        uuid += "-";
        uuid += "4";
        break;
      case 16:
        uuid += "-";
        uuid += ((Math.random() * 4) | 8).toString(16);
        break;
      default:
        uuid += ((Math.random() * 16) | 0).toString(16);
    }
  }
  return uuid;
};

/**
 *
 * @param hex is a color code in the form of hex.
 * Return a rgba equivalent of given hex.
 * @returns {string}
 */
export const hexToRgbA = (hex) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.4)"
    );
  }
  throw new Error("Bad Hex");
};

/**
 *
 * @param color is a color name to convert it to hex
 * Return hex equivalent of given color name
 */
export const colorNameToHex = (color) => {
  var colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  };

  if (typeof colors[color.toLowerCase()] != "undefined")
    return colors[color.toLowerCase()];

  return false;
};

export const getCursor = (toolType) => {
  switch (toolType) {
    case "Highlighter":
      return `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNDYiIHZpZXdCb3g9IjAgMCA1MyA0NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBkPSJNMzkuMDgwNSA1QzM4LjA5NzIgNSAzNy4xNTEgNS4zNDQ1OCAzNi40Mjc0IDYuMDUxODlMMjUuNjQ3OSAxNi42MDcxTDM2LjEzMDUgMjYuODUzOUw0Ni45Mjg1IDE2LjMxNjlDNDguMzU3MiAxNC45MDIzIDQ4LjM1NzIgMTIuNjE3MSA0Ni45Mjg1IDExLjE4NDRMNDEuNjU5NCA2LjA1MTg5QzQwLjkzNTggNS4zNDQ1OCA0MC4wMDgyIDUgMzkuMDgwNSA1Wk0yNS42NDc5IDE2LjYwNzFMMTIuODA5MSAyOS4xMzlDMTEuMzYxOSAzMC41NTM3IDExLjM2MTkgMzIuODM4OCAxMi44NDYyIDM0LjMwNzhDMTAuNTgyNyAzNi41Mzg1IDguMjgyMDUgMzguNzY5MyA2IDQxSDE2LjUwMTJMMTguMDk2NyAzOS40NDAzQzE5LjU0MzkgNDAuODE4NiAyMS44NjMxIDQwLjgwMDUgMjMuMzEwMiAzOS40MDRMMzYuMTMwNSAyNi44NTM5IiBmaWxsPSIjMUQ3REVBIi8+CjxwYXRoIGQ9Ik0yNS42NDc5IDE2LjYwNzFMMzYuNDI3NCA2LjA1MTg5QzM3LjE1MSA1LjM0NDU4IDM4LjA5NzIgNSAzOS4wODA1IDVDNDAuMDA4MiA1IDQwLjkzNTggNS4zNDQ1OCA0MS42NTk0IDYuMDUxODlMNDYuOTI4NSAxMS4xODQ0QzQ4LjM1NzIgMTIuNjE3MSA0OC4zNTcyIDE0LjkwMjMgNDYuOTI4NSAxNi4zMTY5TDM2LjEzMDUgMjYuODUzOU0yNS42NDc5IDE2LjYwNzFMMzYuMTMwNSAyNi44NTM5TTI1LjY0NzkgMTYuNjA3MUwxMi44MDkxIDI5LjEzOUMxMS4zNjE5IDMwLjU1MzcgMTEuMzYxOSAzMi44Mzg4IDEyLjg0NjIgMzQuMzA3OEMxMC41ODI3IDM2LjUzODUgOC4yODIwNSAzOC43NjkzIDYgNDFIMTYuNTAxMkwxOC4wOTY3IDM5LjQ0MDNDMTkuNTQzOSA0MC44MTg2IDIxLjg2MzEgNDAuODAwNSAyMy4zMTAyIDM5LjQwNEwzNi4xMzA1IDI2Ljg1MzkiIHN0cm9rZT0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjc3MzQzOCIgeT0iMC41IiB3aWR0aD0iNTEuNzI2OCIgaGVpZ2h0PSI0NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1MDY1MSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=) 0 36, crosshair`;
    case "Pencil":
      return `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjkzODQgNC40ODM0Nkw0Ni4yNzE4IDQuODQ5OUw0Ny4zODYyIDE0LjE4NUwxNS4yOTk1IDQ0LjAzNThMNC44NTE2OCA0Ni4yNzQ2TDcuMDkwNDkgMzUuODI2OEwzNi45Mzg0IDQuNDgzNDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMy4zMjQ5MyA0Ny43ODc3TDMuMzMzNDMgNDcuNzk2MkMzLjU1ODc4IDQ4LjAyMzMgMy44MjY3OSA0OC4yMDM1IDQuMTIyMDMgNDguMzI2NkM0LjQxNzI3IDQ4LjQ0OTYgNC43MzM5NCA0OC41MTMyIDUuMDUzODEgNDguNTEzNEM1LjMyMjk2IDQ4LjUxMzIgNS41OTAyNiA0OC40Njg4IDUuODQ1MDQgNDguMzgyTDE5LjcxNjUgNDMuNjc2NEw0Ni4zMzQ5IDE3LjA1NzdDNDcuOTYyMiAxNS40MzAzIDQ4Ljg3NjMgMTMuMjIzMSA0OC44NzYyIDEwLjkyMTdDNDguODc2MSA4LjYyMDMyIDQ3Ljk2MTggNi40MTMyMSA0Ni4zMzQ0IDQuNzg1OTRDNDQuNzA3IDMuMTU4NjYgNDIuNDk5OCAyLjI0NDUzIDQwLjE5ODUgMi4yNDQ2M0MzNy44OTcxIDIuMjQ0NzMgMzUuNjkgMy4xNTkwNiAzNC4wNjI3IDQuNzg2NDdMNy40NDQyOSAzMS40MDUyTDIuNzM5MTMgNDUuMjc2NEMyLjU5MDkyIDQ1LjcwNzggMi41NjcyNiA0Ni4xNzIxIDIuNjcwODcgNDYuNjE2M0MyLjc3NDQ4IDQ3LjA2MDUgMy4wMDExNiA0Ny40NjY1IDMuMzI0OTMgNDcuNzg3N1pNMzYuMjczMiA2Ljk5Njc1QzM3LjMxNTcgNS45NjIyMiAzOC43MjU2IDUuMzgyOTMgNDAuMTk0MyA1LjM4NTc1QzQxLjY2MjkgNS4zODg1OCA0My4wNzA3IDUuOTczMjcgNDQuMTA5MSA3LjAxMThDNDUuMTQ3NiA4LjA1MDMzIDQ1LjczMjMgOS40NTgwNyA0NS43MzUxIDEwLjkyNjhDNDUuNzM3OSAxMi4zOTU0IDQ1LjE1ODYgMTMuODA1NCA0NC4xMjQgMTQuODQ3OUw0MC42MjM3IDE4LjM0ODJMMzIuNzcyNiAxMC40OTcxTDM2LjI3MzIgNi45OTY3NVpNMTAuMTcwNiAzMy4wOTk1TDMwLjU2MjQgMTIuNzA3NEwzOC40MTM0IDIwLjU1ODVMMTguMDIxNSA0MC45NTA1TDYuMTQwMDQgNDQuOTgxMUwxMC4xNzA2IDMzLjA5OTVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K) 0 52, crosshair`;
  }
};
