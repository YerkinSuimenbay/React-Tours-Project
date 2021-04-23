import React, {useState} from "react"

const Sight = ({id, name, info, image, price, updatePlaces}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-sight">
            <img src={image} alt={name}></img>
            <footer>
                <div className="namePrice">
                    <h4>{name}</h4>
                    <h4 className="price">{price} тг</h4>
                </div>
                <p>{readMore ? info : info.substring(0, 250) + "..."}
                    <button className="readMore-btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => updatePlaces(id)}>maybe another time</button>
            </footer>
        </article>
    )
}

export default Sight;