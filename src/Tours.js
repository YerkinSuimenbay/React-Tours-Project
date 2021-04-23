import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  
  console.log(tours)
  return (
    <section>
      <h2 className="title">Our tours</h2>
      <div className="underline"></div>
      {tours.map(tour => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
      })}
    </section>
  )
};

export default Tours;
