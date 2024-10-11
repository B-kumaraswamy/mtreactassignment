
import React from 'react';
import './Problem1.css';  

const Bucket = ({ title, items, selectedItems, onItemClick }) => {
  return (
    <div className="bucket">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={selectedItems.includes(item) ? 'selected' : ''} /* Applying different css for selected items */ 
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bucket;

