import { Link } from 'react-router-dom'
import { useMovieStore } from '@/stores/movie'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
