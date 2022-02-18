import React from 'react'
import FilmIcon from '../images/film.svg'

const Header = () => {
  return (
        <div className='header-container'>
            <h2 className='title'>Movie Search App</h2>
            <img src={FilmIcon} className='movie-icon' alt='movies icon'/>
        </div>
  )
}

export default Header