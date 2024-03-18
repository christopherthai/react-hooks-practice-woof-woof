import React from 'react'

function DogDetail({ selectedDog, onUpdateDog }) {

  if (!selectedDog) return <h3>Select a doggo</h3>;

  const { id, name, image, isGoodDog } = selectedDog

  const handleClick = () => {
    const updatedDog = { ...selectedDog, isGoodDog: !isGoodDog }
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedDog)
    })
      .then(response => response.json())
      .then(onUpdateDog)
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info"></div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={handleClick}>{isGoodDog ? "Good" : "Bad"} Dog!</button>
    </div>
  )
}

export default DogDetail