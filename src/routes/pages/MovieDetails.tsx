import Modal from '@/components/Modal'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetailsPage() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    fetchMovieDetails()
  }, [movieId]) // 반응형 변수를 걸어줘야 onMount 말고 변수 변경되도 트리거 됨.
  // useEffect (실행할 함수, 의존성 배열)

  async function fetchMovieDetails() {
    const resp = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`,
      {
        method: 'GET'
      }
    )
    const movie = await resp.json()
    setMovie(movie)
  }
  return (
    <Modal>
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
