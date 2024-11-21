import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function MoviesPage() {
  const [text, setText] = useState('')
  const [searchText, setSearchText] = useState('')

  const queryClient = useQueryClient()
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies', searchText],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      return Search
    },
    enabled: !!searchText,
    staleTime: 1000 * 60 * 5
  })

  function fetchMovies() {
    setSearchText(text)
    queueMicrotask(() => {
      queryClient.fetchQuery({
        queryKey: ['movies', text],
        staleTime: 1000 * 60 * 5
      })
    })
  }

  return (
    <>
      <h1>Movies Page!</h1>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={() => fetchMovies()}>검색</button>

      <ul>
        {movies?.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  )
}
