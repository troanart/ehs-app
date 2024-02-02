import React from 'react';
import { ColorPicker } from 'antd';

const Demo = ({ groupType, onColorChange }) => {
  const handleChange = (color) => {
    if (color && color.metaColor) {
      const { r, g, b, a } = color.metaColor;
      const rgbaColor = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
      onColorChange(rgbaColor);
      console.log('Color with metaColor:', color.metaColor);
    } else if (color && color.hex) {
      const formattedColor = {
        color: color.hex,
        type: groupType,
      };
      onColorChange(formattedColor);
      console.log('Formatted color:', formattedColor);
    } else {
      console.error('Color or hex value is undefined:', color);
    }
  };

  return <ColorPicker format='rgba' defaultValue="#1677ff" onChange={handleChange} />;
};

export default Demo;


// import React, { useState, useEffect } from 'react';
// import { ColorPicker } from 'antd';

// const Demo = ({ groupType, onColorChange }) => {
//   const [currentColor, setCurrentColor] = useState(() => {
//     const storedColor = localStorage.getItem(`selectedColor_${groupType}`);
//     return storedColor ? JSON.parse(storedColor) : getDefaultColor();
//   });

//   const getDefaultColor = () => '#1677ff';

//   const handleChange = (color) => {
//     setCurrentColor(color);

//     localStorage.setItem(`selectedColor_${groupType}`, JSON.stringify(color));

//     if (color && color.metaColor) {
//       const { r, g, b, a } = color.metaColor;
//       const rgbaColor = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
//       onColorChange(rgbaColor);
//     }

//     const formattedColor = {
//       color: color.hex,
//       type: groupType,
//     };
//     onColorChange(formattedColor);
//   };

//   useEffect(() => {
//     const formattedColor = {
//       color: currentColor.hex,
//       type: groupType,
//     };
//     onColorChange(formattedColor);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return <ColorPicker format="hex" onChange={handleChange} defaultValue={currentColor.hex} />;
// };

// export default Demo;
