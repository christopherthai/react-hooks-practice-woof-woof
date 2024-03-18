import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogDetail from "./DogDetail";

function App() {

  const [dogs, setDogs] = useState([])
  const [goodDogFilter, setGoodDogFilter] = useState(false)
  const [selectedDog, setSelectedDog] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((response) => response.json())
      .then((dog_data) => setDogs(dog_data));
  }, [])


  const handleDogClick = (id) => {
    const foundDog = dogs.find(dog => dog.id === id)
    setSelectedDog(foundDog)
  }

  const onUpdateDog = (updatedDog) => {
    const updatedDogs = dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return updatedDog
      } else {
        return dog
      }
    })
    setDogs(updatedDogs)
    setSelectedDog(updatedDog)
  }

  const handleDogToggleFilter = () => {
    setGoodDogFilter(prev => !prev)
  }

  const filteredDogs = dogs.filter(dog => {
    if (goodDogFilter) {
      return dog.isGoodDog
    } else {
      return true
    }
  })


  return (
    <div className="App">
      <Filter goodDogFilter={goodDogFilter} onTogglerFilter={handleDogToggleFilter} />
      <DogBar dogs={filteredDogs} onDogClick={handleDogClick} />
      <DogDetail selectedDog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
