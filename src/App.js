import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  const imageUrl = 'https://example.com/image.jpg'; // Replace with your image URL

  return (
    <div>
      <img src={imageUrl} alt="Thumbnail" className="thumbnail" />
    </div>
  );
}

export default App;
