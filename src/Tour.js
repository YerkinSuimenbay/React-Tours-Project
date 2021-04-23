import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{showMore? info : info.substring(0, 200)+" ..."}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? 'show less info' : 'read more'}</button>
        </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>delete</button>
      </footer>
    </article>
  )
};

export default Tour;
