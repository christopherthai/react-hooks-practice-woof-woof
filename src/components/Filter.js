import React from 'react'

function Filter({ goodDogFilter, onTogglerFilter }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={onTogglerFilter}>Filter good dogs: {goodDogFilter ? "ON" : "Off"}</button>
    </div>
  )
}

export default Filter
