import { Link } from 'react-router-dom'
import { useMovies } from '@/hooks/movie'
import Loader from '@/components/Loader'

export default function MovieList() {
  const { data: movies, isFetching } = useMovies()

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <ul>
          {movies?.map(movie => (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title}({movie.Year})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
