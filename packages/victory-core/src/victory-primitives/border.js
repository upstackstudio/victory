import React from "react";
import PropTypes from "prop-types";
import Helpers from "../victory-util/helpers";
import { assign } from "lodash";
import CommonProps from "../victory-util/common-props";

const Border = (props) => {
  const {
    x,
    y,
    width,
    height,
    events,
    datum,
    active,
    role,
    clipPath,
    className,
    shapeRendering,
    rectComponent,
    transform
  } = props;
  const style = Helpers.evaluateStyle(assign({ fill: "none" }, props.style), datum, active);
  return React.cloneElement(rectComponent, {
    ...style,
    ...events,
    className,
    x,
    y,
    width,
    height,
    role,
    shapeRendering,
    transform,
    clipPath
  });
};

Border.propTypes = {
  ...CommonProps.primitiveProps,
    height: PropTypes.number,
    rectComponent: PropTypes.element,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
};

Border.defaultProps = {
  rectComponent: <rect />
};
export default Border;
