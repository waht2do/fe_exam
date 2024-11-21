import { Outlet } from 'react-router-dom'
import SearchBar from '@/components/movies/SearchBar'
import MovieList from '@/components/movies/MovieList'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function MoviesPage() {
  const [searchText, setSearchText] = useState('')
  const { data: movies, refetch } = useQuery<Movie[]>({
    queryKey: ['movies', searchText],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      return Search
    },
    enabled: false,
    staleTime: 1000 * 60 * 5
  })

  function fetchMovies() {}
  return (
    <>
      <h1>Movies Page!</h1>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && refetch()}></input>
      <button onClick={() => refetch()}>검색</button>
      {/* <SearchBar /> */}
      <MovieList />
      <Outlet />
    </>
  )
}
