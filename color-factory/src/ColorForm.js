import React from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = () => {
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission and add new color logic here

    // Redirect to colors index after submitting the form
    history.push('/colors');
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for adding a new color */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ColorForm;
