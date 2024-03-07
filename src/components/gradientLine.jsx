import React from 'react';
import { GoTriangleUp } from "react-icons/go";

const GradientLine = ({ low, high, show }) => {
  const trianglePosition = low + (high - low) / 2;

  const gradientStyle = {
    background: `linear-gradient(to right, #4CAF50 ${low}%, #FF5722 ${high}%)`,
    height: '4px',
    borderRadius: '4px',
    width: '100%',
    position: 'relative',
  };

  const triangleStyle = {
    position: 'absolute',
    left: `calc(${trianglePosition}% - 10px)`,
    top: '5px',
    color: 'black',
    fontSize: '20px',
  };

  const textStyle = {
    position: 'absolute',
    left: `calc(${trianglePosition}% - 10px)`,
    top: '20px',
    color: 'black',
    fontSize: '14px',
  };

  return (
    <>
      <div style={gradientStyle}>
        {show && (
          <>
            <GoTriangleUp style={triangleStyle} />
            <p style={textStyle}>$48,637.83</p>
          </>
        )}
      </div>
    </>
  );
};

export default GradientLine;
