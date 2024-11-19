import { create } from 'zustand'

export const useMovieStore = create((set, get) => {
  // 상태 객체
  return {
    searchText: '',
    movies: [],
    setSearchText: (text: string) => {
      // searchText = text
      set({
        searchText: text
      })
    },
    fetchMovies: async () => {
      const { searchText } = get()
      const resp = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`,
        {
          method: 'GET'
        }
      )
      const { Search } = await resp.json()
      // setMovies(Search)
      set({
        movies: Search
      })
    }
  }
})
