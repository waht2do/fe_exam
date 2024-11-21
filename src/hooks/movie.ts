import { useQuery } from '@tanstack/react-query'
import { useMovieStore } from '@/stores/movie'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export function useMovies() {
  const searchText = useMovieStore(state => state.searchText)
  return useQuery<Movie[]>({
    queryKey: ['movies', searchText],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      return Search
    },
    enabled: Boolean(searchText),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    select: movies => {
      return movies.filter(movie => {
        return Number.parseInt(movie.Year, 10) > 2000
      })
    }
  })
}

export function useSample1() {
  useQuery({ queryKey: ['hello', 'world', 123, { a: 1, b: 2 }] })
}
export function useSample2() {
  useQuery({ queryKey: ['hello', 'world', 123, { a: 1, b: 2 }] })
}

// const { data, isLoading, isError, refetch } = useMovies('avengers')
