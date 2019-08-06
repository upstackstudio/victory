import React from "react";
import PropTypes from "prop-types";

const Path = (props) => {
  const { d, role, shapeRendering, className, clipPath, style, transform, events } = props;
  return (
    <path
      d={d}
      transform={transform}
      className={className}
      clipPath={clipPath}
      style={style}
      role={role || "presentation"}
      shapeRendering={shapeRendering || "auto"}
      {...events}
    />
  );
}

Path.propTypes = {
  className: PropTypes.string,
  clipPath: PropTypes.string,
  d: PropTypes.string,
  events: PropTypes.object,
  role: PropTypes.string,
  shapeRendering: PropTypes.string,
  style: PropTypes.object,
  transform: PropTypes.string
};

export default Path;
