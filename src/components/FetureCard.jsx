import React, { useState } from 'react'; 
import data from '../Data.json';
import '../components/Card.css';
import Card from './Card';
import Popup from './Popup';


function FeCard() {
  const [selected, setSelected] = useState(null); 

  return (
    <>
      <div className="card-gallery">
        {data.map((item, index) => (
          <Card
            key={index}
            src={item.Img}
            alt={item.Title}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && <Popup item={selected} onClose={() => setSelected(null)} />}

    </>
  );
}

export default FeCard;
