import React, {useState} from 'react'

const SearchInput = () => {
    const [query, setQuery] = useState('')
    console.log(query)
  return (
    <main>
        <div className='input-section'>
            <form>
                <label className='input-lable' htmlFor='search'>Movie Name:</label>
                <input className='search-input' type='text' placeholder='e.g Avengers' value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
            </form>
         </div>
    </main>
  )
}

export default SearchInput