import React, { useState, useEffect, useCallback } from 'react';
import './Problem3.css';

const imageUrls = [
  'https://via.placeholder.com/600/92c952',
  'https://via.placeholder.com/600/24f355',
  'https://via.placeholder.com/600/d32776',
  'https://via.placeholder.com/600/f66b97',  
  'https://via.placeholder.com/600/b0f7cc',
  'https://via.placeholder.com/600/54176f',
  'https://via.placeholder.com/600/8e973b'  
  //'https://via.placeholder.com/600/56a8c2',    
  //'https://via.placeholder.com/600/51aa97',   
];

const Problem3 = () => {
  const [images, setImages] = useState([]);  // Store loaded images
  const [loading, setLoading] = useState(false);

  // Function to load more images
  const loadMoreImages = useCallback(() => {
    setLoading(true);
    console.log("inside load more images")
    setTimeout(() => {
      const newImages = [];
      const batchSize = 7;  

      for (let i = 0; i < batchSize; i++) {
        newImages.push(imageUrls[i]);
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
    }, 1000);  // Simulate a delay to mimic an API call
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      // how far the user has scrolled down      //This is the total height of the page, minus 100 pixels.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        loadMoreImages();  // Call loadMoreImages when the user reaches near the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);  // Listen for scroll events
    return () => window.removeEventListener('scroll', handleScroll);  // when you navigate to another page/component), the scroll listener is removed.
  }, [loading, loadMoreImages]);


  useEffect(() => {
    loadMoreImages();  // Load the first batch of images when the component mounts
  }, [loadMoreImages]);

  return (
    <div className="problem3">
      <h1>Infinite Scroll Image Gallery</h1>
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-item">
            <img src={imageUrl} alt={`img ${index + 1}`} />
          </div>
        ))}
      </div>
      {loading && <p className="loading">Loading more images...</p>}
    </div>
  );
};

export default Problem3;









