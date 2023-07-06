import React from 'react';
import {Link} from 'react-router-dom';


const ColorsList = () => {

    const colors = [
        {id:1, name: 'Red'},
        {id:2, name: 'Blue'},
        {id:3, name: 'Purple'},
    ];

    return (
        <div>
          <h1>Colors List</h1>
          <ul>
            {colors.map(color => (
              <li key={color.id}>
                <Link to={`/colors/${color.name}`}>{color.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/colors/new">Add New Color</Link>
        </div>
      );
}

export default ColorsList;

