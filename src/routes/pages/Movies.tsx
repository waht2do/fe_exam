import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function MoviesPage() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  return (
    <>
      <h1>Movies Pages</h1>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={fetchMovies}>검색</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
            {/* <img
              src={movie.Poster}
              alt=""
            /> */}
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </>
  )
}
