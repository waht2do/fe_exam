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
    enabled: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60
  })
}
