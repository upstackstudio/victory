import React from "react";
import PropTypes from "prop-types";
import Helpers from "../victory-util/helpers";
import pathHelpers from "./path-helpers";
import CommonProps from "../victory-util/common-props";
import Path from "./path";

const getPath = (props) => {
  const { datum, active, x, y } = props;
  const size = Helpers.evaluateProp(props.size, datum, active);
  if (props.getPath) {
    return props.getPath(x, y, size);
  }
  const pathFunctions = {
    circle: pathHelpers.circle,
    square: pathHelpers.square,
    diamond: pathHelpers.diamond,
    triangleDown: pathHelpers.triangleDown,
    triangleUp: pathHelpers.triangleUp,
    plus: pathHelpers.plus,
    minus: pathHelpers.minus,
    star: pathHelpers.star
  };
  const symbol = Helpers.evaluateProp(props.symbol, datum, active);
  const symbolFunction =
    typeof pathFunctions[symbol] === "function" ? pathFunctions[symbol] : pathFunctions.circle;
  return symbolFunction(x, y, size);
};

const Point = (props) => {
  const {
    active,
    datum,
    role,
    shapeRendering,
    className,
    events,
    pathComponent,
    transform,
    clipPath
  } = props;
  const style = Helpers.evaluateStyle(props.style, datum, active);
  const d = getPath(props);
  return React.cloneElement(pathComponent, {
    ...style,
    ...events,
    role,
    shapeRendering,
    className,
    d,
    transform,
    clipPath
  });
};

Point.propTypes = {
  ...CommonProps.primitiveProps,
  datum: PropTypes.object,
  getPath: PropTypes.func,
  pathComponent: PropTypes.element,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  symbol: PropTypes.oneOfType([
    PropTypes.oneOf([
      "circle",
      "diamond",
      "plus",
      "minus",
      "square",
      "star",
      "triangleDown",
      "triangleUp"
    ]),
    PropTypes.func
  ]),
  x: PropTypes.number,
  y: PropTypes.number
};

Point.defaultProps = {
  pathComponent: <path />
};

export default Point;
