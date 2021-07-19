import React from 'react';
import './Results.css'
import NameCard from '../NameCard/NameCard'

const ResultContainer = ({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });


    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    )
}

export default ResultContainer;