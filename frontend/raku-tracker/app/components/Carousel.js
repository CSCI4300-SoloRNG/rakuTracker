import React from 'react';
import './Carousel.css';
import Drawing from './Drawing'; // Import your Drawing component

const DrawingsContainer = () => {
  // Array of default drawing titles
  const defaultDrawings = [
    { id: 1, title: 'Drawing 1' },
    { id: 2, title: 'Drawing 2' },
    { id: 3, title: 'Drawing 3' },
    { id: 4, title: 'Drawing 4' },
    { id: 5, title: 'Drawing 5' }
  ];

  return (
    <div className="carousel">
      {/* Map over the array of default drawings and render Drawing components */}
      {defaultDrawings.map((drawing) => (
        <Drawing key={drawing.id} title={drawing.title} />
      ))}
    </div>
  );
};

export default DrawingsContainer;