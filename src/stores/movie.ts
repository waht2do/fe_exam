import { create } from 'zustand'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
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

export const useMovieStore = create<{
  searchText: string
  movies: Movie[]
  currentMovie: MovieDetails | null
  isLoading: boolean
  setSearchText: (text: string) => void
  fetchMovies: () => Promise<void>
  fetchMovieDetails: (movieId: string) => Promise<void>
}>((set, get) => {
  // 상태 객체
  return {
    searchText: '',
    movies: [],
    currentMovie: null,
    isLoading: false,
    setSearchText: text => {
      set({
        searchText: text
      })
    },
    fetchMovies: async () => {
      const { searchText } = get()
      // const state = get()
      // const searchText = state.searchText
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      set({
        movies: Search
      })
    },
    fetchMovieDetails: async movieId => {
      set({
        isLoading: true
      })
      // await new Promise(resolve => setTimeout(resolve, 3000))
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
      )
      const data = await res.json()
      set({
        currentMovie: data,
        isLoading: false
      })
    }
  }
})

// 인수 = Argument = 데이터
// 인자(매개변수) = Parameter = 변수
