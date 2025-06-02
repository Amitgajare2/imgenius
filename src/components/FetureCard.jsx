import React, { useState, useRef } from 'react'; // add useRef // <-- add useState
import data from '../Data.json';
import '../components/Card.css';

function FeCard() {
  const textRef = useRef(null);
  const [selected, setSelected] = useState(null); // <-- add state

  return (
    <>
      <div className="card-gallery">
        {data.map((item, index) => (
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
              <p><strong>Prompt:</strong> </p>
              <textarea ref={textRef} readOnly value={selected.prompt} />
              <button
                className="copy-btn"
                onClick={() => {
                  if (textRef.current) {
                    // Try modern clipboard API
                    if (navigator.clipboard && window.isSecureContext) {
                      navigator.clipboard.writeText(textRef.current.value)
                        .then(() => alert('Prompt copied to clipboard!'))
                        .catch(() => fallbackCopy());
                    } else {
                      fallbackCopy();
                    }
                  }
              
                  function fallbackCopy() {
                    textRef.current.select();
                    document.execCommand('copy');
                    alert('Prompt copied to clipboard!');
                  }
                }}
              >
                Copy Text
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeCard;
