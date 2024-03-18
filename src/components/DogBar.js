import React from 'react'

function DogBar({ dogs, onDogClick }) {

  const dogSpan = dogs.map(dog => {
    return <span key={dog.id} onClick={() => onDogClick(dog.id)}>{dog.name}</span>
  })

  return (
    <div id="dog-bar">{dogSpan}</div>
  )
}

export default DogBar