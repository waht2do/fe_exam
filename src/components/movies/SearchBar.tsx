import { useQueryClient } from '@tanstack/react-query'
import { useMovieStore } from '@/stores/movie'

export default function SearchBar() {
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const inputText = useMovieStore(state => state.inputText)
  const setInputText = useMovieStore(state => state.setInputText)
  const queryClient = useQueryClient()

  function fetchMovies() {
    setSearchText(inputText)
    queueMicrotask(() => {
      queryClient.fetchQuery({
        queryKey: ['movies', searchText],
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60
      })
    })
  }

  return (
    <>
      <input
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies()}
      />
      <button onClick={() => fetchMovies()}>검색</button>
    </>
  )
}
