import React from "react"
import Sight from "./Sight"


const Sights = ({places, updatePlaces}) => {
    return (
        <section>
            <h2 className="title">Almaty tours</h2>
            <div className="underline"></div>
            {places.map(place => {
                return <Sight key={place.id} {...place} updatePlaces={updatePlaces}/>
            })}
            
        </section>
    )
}

export default Sights