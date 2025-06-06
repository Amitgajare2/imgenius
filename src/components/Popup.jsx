import React, { useRef } from "react";
import "./Popup.css";
import "../Mobile.css"

function Popup({ item, onClose }) {
  const textRef = useRef(null);

  const copyPrompt = () => {
    const txt = textRef.current;
    if (!txt) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(txt.value)
        .then(() => alert("Prompt copied to clipboard!"))
        .catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      txt.select();
      document.execCommand("copy");
      alert("Prompt copied to clipboard!");
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={item.imgUrl || item.Img} alt={item.title || item.Title} className="popup-img" />
        <div className="popup-details">
          <small>Category : <strong> {item.category || item.category} </strong></small>
          <h2>{item.title || item.Title}</h2>
          <p className="p"><strong>Creator :</strong> {item.name || item.Name}</p>
          <p className="p"><strong>Prompt :</strong></p>
          <textarea ref={textRef} readOnly value={item.prompt} />
          <button className="copy-btn" onClick={copyPrompt}>Copy Text</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
