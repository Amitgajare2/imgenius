import React, { useState } from 'react';
import data from '../Data.json';
import './Card.css';

function Card({ selectedCategory }) {
  const [selected, setSelected] = useState(null);

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <div className="card-gallery">
        {filteredData.map((item, index) => (
          <img
            key={index}
            src={item.Img}
            alt={item.Title}
            className="card-image"
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.Img} alt={selected.Title} className="popup-img" />
            <div className="popup-details">
              <h2>{selected.Title}</h2>
              <p><strong>Creator:</strong> {selected.Name}</p>
              <p><strong>Prompt:</strong> {selected.prompt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
