import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '@/components/Modal'
import { useMovieStore } from '@/stores/movie'

export default function MovieDetailsPage() {
  const { movieId } = useParams()
  const movie = useMovieStore(state => state.currentMovie)
  const isLoading = useMovieStore(state => state.isLoading)
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)

  useEffect(() => {
    if (!movieId) return // 타입 가드
    fetchMovieDetails(movieId)
  }, [movieId])

  return (
    <Modal loading={isLoading}>
      <h1>Movie Details Page!</h1>
      <h2>{movieId}</h2>
      {movie && (
        <>
          <h2>{movie.Title}</h2>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
          <p>{movie.Director}</p>
          <p>{movie.Plot}</p>
        </>
      )}
    </Modal>
  )
}
// https://nextjs-movie-app-steel.vercel.app/movies/tt11315808
