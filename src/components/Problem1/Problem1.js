// src/components/Problem1.js
import React, { useState } from 'react';           
import Bucket from './Bucket';                      
import TransferButtons from './TransferButtons';    
import './Problem1.css';                            

const Problem1 = () => {
  // State for items in Bucket 1
  const [bucket1Items, setBucket1Items] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 5']);
  
  // State for items in Bucket 2
  const [bucket2Items, setBucket2Items] = useState(['Item 4', 'Item 6']);
  
  // State for selected items in Bucket 1
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  
  // State for selected items in Bucket 2
  const [selectedBucket2, setSelectedBucket2] = useState([]);

 
  const handleBucket1ItemClick = (item) => {
    setSelectedBucket1((prevSelected) =>
      prevSelected.includes(item) 
        ? prevSelected.filter((i) => i !== item)  // Deselect if already selected
        : [...prevSelected, item]                 // Select if not already selected
    );
  };

  
  const handleBucket2ItemClick = (item) => {
    setSelectedBucket2((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)  // Deselect if already selected
        : [...prevSelected, item]                 // Select if not already selected
    );
  };

  // Move selected items from Bucket 1 to Bucket 2
  const handleAdd = () => {
    if (selectedBucket1.length === 0) return;    // Prevent action if no items are selected
    setBucket2Items([...bucket2Items, ...selectedBucket1]);  
    setBucket1Items(bucket1Items.filter((item) => !selectedBucket1.includes(item)));  
    setSelectedBucket1([]);  
  };

  // Move selected items from Bucket 2 to Bucket 1
  const handleRemove = () => {
    if (selectedBucket2.length === 0) return;    // Prevent action if no items are selected
    setBucket1Items([...bucket1Items, ...selectedBucket2]);  
    setBucket2Items(bucket2Items.filter((item) => !selectedBucket2.includes(item)));  
    setSelectedBucket2([]);  
  };

  // Move all items from Bucket 1 to Bucket 2
  const handleAddAll = () => {
    setBucket2Items([...bucket2Items, ...bucket1Items]);  
    setBucket1Items([]);  
    setSelectedBucket1([]);  
  };

  // Move all items from Bucket 2 to Bucket 1
  const handleRemoveAll = () => {
    setBucket1Items([...bucket1Items, ...bucket2Items]);  
    setBucket2Items([]);  
    setSelectedBucket2([]);  
  };

  return (
    <div className="problem1">  
      <Bucket
        title="Bucket 1"               
        items={bucket1Items}            
        selectedItems={selectedBucket1} 
        onItemClick={handleBucket1ItemClick} 
      />
      <TransferButtons
        onAdd={handleAdd}               
        onRemove={handleRemove}         
        onAddAll={handleAddAll}         
        onRemoveAll={handleRemoveAll}   
      />
      <Bucket
        title="Bucket 2"               
        items={bucket2Items}          
        selectedItems={selectedBucket2} 
        onItemClick={handleBucket2ItemClick} 
      />
    </div>
  );
};

export default Problem1;