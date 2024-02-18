import React, { useState, useEffect } from 'react';

function App() {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [imageSize, setImageSize] = useState('');

  useEffect(() => {
    fetchThumbnailFromCloudinary();
  }, []);

  const fetchThumbnailFromCloudinary = async () => {
    try {
      // Use the existing Cloudinary URL for the image
      const cloudinaryImageUrl = 'https://res.cloudinary.com/do6fkcc8s/image/upload/v1708242716/cld-sample-4.jpg';
      // You can fetch additional metadata if needed
      // For simplicity, I'm hardcoding timestamp and image size
      setThumbnailUrl(cloudinaryImageUrl);
      setTimestamp('2024-02-18');
      setImageSize('2.5 MB');
    } catch (error) {
      console.error('Error fetching thumbnail from Cloudinary:', error);
    }
  };

  return (
    <div>
      {thumbnailUrl && (
        <div>
          <img src={thumbnailUrl} alt="Thumbnail" onError={() => console.error('Error loading image')} />
          <p>Timestamp: {timestamp}</p>
          <p>Image Size: {imageSize}</p>
        </div>
      )}
    </div>
  );
}

export default App;
