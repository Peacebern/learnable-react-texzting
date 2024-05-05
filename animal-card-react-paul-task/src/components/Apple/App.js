import React from 'react';
import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard.js';
import data from './data';

function showAdditional(additional) {
    const sadd = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');

    alert(sadd);
}


function App() {
  return (
    
    <div className='wrapper'>
    <h1>Animals</h1>
    
    {data.map(animal => (
        <AnimalCard 
        additional={animal.additional}
        key={animal.name}
        name={animal.name}
        diet={animal.diet}
        scientificName={animal.scientificName}
        showAdditional={showAdditional}
        size={animal.size}
        />
      ))}
      </div>

      )
    }

export default App;


