import { Link } from 'react-router-dom'
// import { useMovieStore } from '@/stores/movie'
import { useMovies } from '@/hooks/movie'

export default function MovieList() {
  const { data: movies } = useMovies()
  // const movies = useMovieStore(state => state.movies)

  return (
    <>
      <ul>
        {movies?.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              {movie.Title}({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
