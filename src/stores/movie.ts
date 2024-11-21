import { create } from 'zustand'
import { combine } from 'zustand/middleware'

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

export const useMovieStore = create(
  combine(
    {
      inputText: '',
      searchText: '',
      movies: [] as Movie[], // as 타입 단언
      currentMovie: null as null | MovieDetails, // as 타입 단언
      isLoading: false
    },
    (set, get) => {
      // 상태 객체
      return {
        setInputText(text: string) {
          set({
            inputText: text
          })
        },
        setSearchText(text: string) {
          set({
            searchText: text
          })
        },
        async fetchMovies() {
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
        async fetchMovieDetails(movieId: string) {
          set({
            isLoading: true
          })
          await new Promise(resolve => setTimeout(resolve, 1500))
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
    }
  )
)
