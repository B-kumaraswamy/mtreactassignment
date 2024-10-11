/*
<=== Problem 1 ===>

<li onClick={onItemClick(item)}>
  {item}
</li>
In React, if you use a function directly (without a callback), it will execute immediately when the component renders, instead of waiting for the user to click on the element.
This would immediately invoke the onItemClick(item) function during the component's render phase, which is not what we want. We only want the function to be called when the user clicks on the list item. But in this example, it will run as soon as the component renders.

---------------------------------------------------------

<li onClick={() => onItemClick(item)}>
  {item}
</li>

In contrast, by using a callback function like this, We are telling React: "Hey, when the user clicks on this li element, then and only then should you call the onItemClick(item) function."
The function () => onItemClick(item) is a function declaration that returns a new anonymous function, which will be executed when the onClick event is triggered.

========================================================================

<=== Problem 2 ===>

const selectedContinent = { name: "Asia" };  // No children array

// This would cause an error!
console.log(selectedContinent.children.length);

This will throw an error like: 
  TypeError: Cannot read properties of undefined (reading 'length')


With Optional Chaining (Safe)
const selectedContinent = { name: "Asia" };  // No children array

// This is safe and will just return false
console.log(selectedContinent?.children?.length > 0);  // false
Now, instead of throwing an error, it will return false and the app will continue working without breaking.

----------------------------------------------------------------------

<span>{item.name || item}</span> ==> returns the truthy between the two
The ListPanel is flexible because it checks if item.name exists, which is for objects (like continents or countries). If item.name doesn't exist (as with states, which are strings), it just displays item, which works for strings. This way, it supports both types of data without any issues.


==========================================================================

<=== Problem 3 ===>

some other addEventListener
scroll : Fires when the user scrolls within an element or the entire window.
click : Fires when the user clicks on an element.
mousemove : Fires when the mouse is moved
mousedown : Fires when a mouse button is pressed down.
mouseup : Fires when a mouse button is released
mouseenter/mouseleave : Fires when the mouse enters or leaves an element
keydown : Fires when any key is pressed down
keypress : Fires when a key is pressed, but is generally deprecated in favor of "keydown".
input : Fires whenever the value of an <input> or <textarea> element changes
submit : Fires when a form is submitted.
reset : Fires when a form is reset
wheel : Fires when the user scrolls using a mouse wheel or touchpad.

===========================================================================



<== Problem 1 with drag feature ==>

import React, { useState } from 'react';           
import Bucket from './Bucket';                      
import TransferButtons from './TransferButtons';    
import './Problem1.css';                            

const Problem1 = () => {
  const [bucket1Items, setBucket1Items] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 5']);
  const [bucket2Items, setBucket2Items] = useState(['Item 4', 'Item 6']);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);
  
  const [draggedItem, setDraggedItem] = useState(null);  // State to store the dragged item
  const [draggedFrom, setDraggedFrom] = useState(null);  // Track which bucket the item is dragged from

  const handleBucket1ItemClick = (item) => {
    setSelectedBucket1((prevSelected) =>
      prevSelected.includes(item) ? prevSelected.filter((i) => i !== item) : [...prevSelected, item]
    );
  };

  const handleBucket2ItemClick = (item) => {
    setSelectedBucket2((prevSelected) =>
      prevSelected.includes(item) ? prevSelected.filter((i) => i !== item) : [...prevSelected, item]
    );
  };

  const handleAdd = () => {
    if (selectedBucket1.length === 0) return;
    setBucket2Items([...bucket2Items, ...selectedBucket1]);
    setBucket1Items(bucket1Items.filter((item) => !selectedBucket1.includes(item)));
    setSelectedBucket1([]);
  };

  const handleRemove = () => {
    if (selectedBucket2.length === 0) return;
    setBucket1Items([...bucket1Items, ...selectedBucket2]);
    setBucket2Items(bucket2Items.filter((item) => !selectedBucket2.includes(item)));
    setSelectedBucket2([]);
  };

  const handleAddAll = () => {
    setBucket2Items([...bucket2Items, ...bucket1Items]);
    setBucket1Items([]);
    setSelectedBucket1([]);
  };

  const handleRemoveAll = () => {
    setBucket1Items([...bucket1Items, ...bucket2Items]);
    setBucket2Items([]);
    setSelectedBucket2([]);
  };

  // Drag Functions
  const handleDragStart = (item, fromBucket) => {
    setDraggedItem(item);
    setDraggedFrom(fromBucket);
  };

  const handleDrop = (toBucket) => {
    if (!draggedItem || draggedFrom === toBucket) return;

    // Move item from Bucket 1 to Bucket 2
    if (draggedFrom === 'bucket1' && toBucket === 'bucket2') {
      setBucket2Items([...bucket2Items, draggedItem]);
      setBucket1Items(bucket1Items.filter((item) => item !== draggedItem));
    }

    // Move item from Bucket 2 to Bucket 1
    if (draggedFrom === 'bucket2' && toBucket === 'bucket1') {
      setBucket1Items([...bucket1Items, draggedItem]);
      setBucket2Items(bucket2Items.filter((item) => item !== draggedItem));
    }

    // Clear dragged item state after drop
    setDraggedItem(null);
    setDraggedFrom(null);
  };

  return (
    <div className="problem1">
      <Bucket
        title="Bucket 1"
        items={bucket1Items}
        selectedItems={selectedBucket1}
        onItemClick={handleBucket1ItemClick}
        onDragStart={(item) => handleDragStart(item, 'bucket1')}
        onDrop={() => handleDrop('bucket1')}
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
        onDragStart={(item) => handleDragStart(item, 'bucket2')}
        onDrop={() => handleDrop('bucket2')}
      />
    </div>
  );
};

export default Problem1;

import React from 'react';
import './Bucket.css';

const Bucket = ({ title, items, selectedItems, onItemClick, onDragStart, onDrop }) => {

  return (
    <div className="bucket" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            draggable
            onClick={() => onItemClick(item)}
            onDragStart={() => onDragStart(item)}
            className={selectedItems.includes(item) ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bucket;

*/