import React from 'react';
import './Problem1.css';  

const TransferButtons = ({ onAdd, onRemove, onAddAll, onRemoveAll }) => {
  return (
    <div className="transfer-buttons">
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <button onClick={onAddAll}>Add All</button>
      <button onClick={onRemoveAll}>Remove All</button>
    </div>
  );
};

export default TransferButtons;


