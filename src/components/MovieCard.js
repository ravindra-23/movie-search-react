import React from 'react'

const MovieCard = ({title, posterUrl, rating, plot, releaseDate}) => {
  return (
        <div className='movie'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterUrl}`} className='movie-poster-image' alt='movie poster' />
            </div>
            <div className='movie-content'>
                <div className='movie-info'>
                    <h2 className='movie-title'>{title}</h2>
                    <h3 className='movie-release-date'>Release Date: {releaseDate}</h3>
                    <h3 className='movie-rating'>Rating: {rating}</h3>
                    <p className='movie-plot'>{plot}</p>
                </div>
            </div>
        </div>
  )
}

export default MovieCard