import { useMovieStore } from '@/stores/movie'
// import type { Movie } from '@/stores/movie'
// import { useMovieStore, type Movie } from '@/stores/movie'

export default function SearchBar() {
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  // const movie: Movie = {}

  return (
    <>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={fetchMovies}>검색</button>
    </>
  )
}
