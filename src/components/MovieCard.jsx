import React from 'react';

const MovieCard = ({ prop }) => {
    return (
        <div className='movie'>
            <div>
                <p>{prop.Year}</p>
            </div>

            <div>
                <img src={prop.Poster !== 'N/A' ? prop.Poster : 'https://via.placeholder.com/400'} alt={prop.Title}></img>
            </div>

            <div>
                <span>{prop.Type}</span>
                <h3>{prop.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;