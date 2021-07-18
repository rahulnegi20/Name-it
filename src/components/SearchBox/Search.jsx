import React from 'react';
import './Search.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input 
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Keyowrds"
                className="search-input"/>
        </div>
    );
};

export default SearchBox;