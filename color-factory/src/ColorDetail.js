import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorDetail = () => {
  const { color } = useParams();

  // Replace this with your color data or fetch the color based on the parameter

  // Check if the color exists
  const colorExists = true; // Replace with your logic to check color existence

  if (!colorExists) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h1>Color Detail</h1>
      <h2>{color}</h2>
      {/* Display color details here */}
    </div>
  );
};

export default ColorDetail;
