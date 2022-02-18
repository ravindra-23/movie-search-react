import React, {useState} from 'react'
import MovieCard from './MovieCard'
const SearchInput = () => {
    const [query, setQuery] = useState('')
    const [movieData, setMovieData] = useState([])
    console.log(movieData)
    console.log(query)

    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovieData(data.results);
        }catch(err){
            console.error(err);
        }
    }

  return (
    <main>
        <div className='input-section'>
            <form onSubmit={searchMovies}>
                <label className='input-lable' htmlFor='search'>Movie Name:</label>
                <input className='search-input' type='text' placeholder='e.g Avengers' value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
            </form>
         </div>

         <div className='movie-list'>
                {movieData && movieData.map(({id, original_title, poster_path, overview, release_date, vote_average}) => ( 
                    <MovieCard 
                        key={id}
                        title={original_title}
                        posterUrl={poster_path}
                        plot={overview}
                        releaseDate={release_date}
                        rating={vote_average}
                    /> 
                ))}
            </div>
    </main>
  )
}

export default SearchInput