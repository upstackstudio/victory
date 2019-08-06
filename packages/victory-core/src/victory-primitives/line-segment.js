import React from "react";
import PropTypes from "prop-types";
import Helpers from "../victory-util/helpers";
import { assign } from "lodash";
import CommonProps from "../victory-util/common-props";
import Line from "./line";

const LineSegment = (props) => {
  const {
    x1,
    x2,
    y1,
    y2,
    events,
    datum,
    active,
    lineComponent,
    className,
    role,
    shapeRendering,
    transform,
    clipPath
  } = props;
  const style = Helpers.evaluateStyle(
    assign({ stroke: "black" }, props.style),
    datum,
    active
  );
  return React.cloneElement(lineComponent, {
    ...style,
    ...events,
    className,
    role,
    shapeRendering,
    x1,
    x2,
    y1,
    y2,
    transform,
    clipPath
  });
}

LineSegment.propTypes = {
  ...CommonProps.primitiveProps,
  datum: PropTypes.any,
  lineComponent: PropTypes.element,
  x1: PropTypes.number,
  x2: PropTypes.number,
  y1: PropTypes.number,
  y2: PropTypes.number
};

LineSegment.defaultProps = {
  lineComponent: <Line />
};

export default LineSegment;
