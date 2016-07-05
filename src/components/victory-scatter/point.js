import React, { PropTypes } from "react";
import pathHelpers from "./path-helpers";


export default class Point extends React.Component {
  static propTypes = {
    datum: PropTypes.object,
    events: PropTypes.object,
    index: PropTypes.number,
    role: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func
    ]),
    symbol: PropTypes.oneOfType([
      PropTypes.oneOf([
        "circle", "diamond", "plus", "square", "star", "triangleDown", "triangleUp"
      ]),
      PropTypes.func
    ]),
    scale: PropTypes.object,
    style: PropTypes.object,
    x: PropTypes.number,
    y: PropTypes.number
  };

  getPath(props) {
    const pathFunctions = {
      circle: pathHelpers.circle,
      square: pathHelpers.square,
      diamond: pathHelpers.diamond,
      triangleDown: pathHelpers.triangleDown,
      triangleUp: pathHelpers.triangleUp,
      plus: pathHelpers.plus,
      star: pathHelpers.star
    };
    return pathFunctions[props.symbol].call(null, props.x, props.y, props.size);
  }

  render() {
    const {events, role, style} = this.props;

    return (
      <path
        {...events}
        d={this.getPath(this.props)}
        role={role}
        shapeRendering="optimizeSpeed"
        style={style}
      />
    );
  }
}
