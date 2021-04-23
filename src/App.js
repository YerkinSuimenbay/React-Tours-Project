import React, {useState, useEffect} from "react"
import Loading from "./Loading"
import Sights from "./Sights"
const url = "./sights_of_almaty.json"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [places, setPlaces] = useState([])

    const updatePlaces = (id) => {
        const updatedPlaces = places.filter(place => place.id !== id)
        setPlaces(updatedPlaces);
    }

    const getData = () => {
        setIsLoading(true)

        fetch(url).then(res => {
            if (res.status >= 200 & res.status <= 299) {
                return res.json()
            } else {
                throw new Error(res.statusText)
                }
            })
            .then(data => {
              setPlaces(data)
              setIsLoading(false)
              }
            )
            .catch(err => console.error("Error: " + err.message))
    }

    useEffect(() => {
        getData();
    }, [])

    if (isLoading) {
        return <main className="container">
            <Loading/>
        </main>
    }

    if (places.length === 0) {
        return <main className="container">
            <h2 className="title">No tours left</h2>
            <button className="refresh-btn" onClick={() => getData()}>refresh</button>
        </main> 
    }

    return (
        <main className="container">
            <Sights places={places} updatePlaces={updatePlaces}/>
        </main>
    )
}

export default App;
