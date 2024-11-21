import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools
} from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 0,
            double: 0
          },
          set => {
            function increase() {
              set(state => ({
                count: state.count + 1
              }))
            }
            function decrease() {
              set(state => ({
                count: state.count - 1
              }))
            }
            return {
              increase,
              decrease
            }
          }
        )
      ),
      {
        name: 'countStore',
        // storage: createJSONStorage(() => sessionStorage),
        partialize: state => ({
          count: state.count
        })
      }
    )
  )
)

// localStorage.getItem(이름)
// localStorage.setItem(이름, 데이터)
// localStorage.removeItem(이름)
// localStorage.clear()

// useCountStore.subscribe(선택자, 콜백)
useCountStore.subscribe(
  state => state.count,
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
