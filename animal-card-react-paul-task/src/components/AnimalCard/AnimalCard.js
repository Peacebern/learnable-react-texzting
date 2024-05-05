import React from 'react';
import './AnimalCard.css';

export default function AnimalCard({
    name,
    size,
    diet,
    additional,
    scientificName,
    showAdditional,
    
    }) {
    
    return (
        <div>
            <h2>{name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}KG</h4>
            <div>{diet.join(",")}.</div>
            <button className='buttcolor' onClick={() => showAdditional(additional)}>More Info...</button>
        </div>
    );
}

