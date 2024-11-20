import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// export const useCountStore = create<{
//   count: number
//   double: number
//   increase: () => void
//   increaseDouble: () => void
// }>((set, get) => ({
//   count: 0,
//   double: 0,
//   increase: () => {
//     // const state = get()
//     // set({
//     //   count: state.count + 1
//     // })
//     set(state => {
//       return {
//         count: state.count + 1
//       }
//     })
//     const state = get()
//     state.increaseDouble()
//   },
//   increaseDouble: () => {
//     set(state => ({
//       double: state.count * 2
//     }))
//   }
// }))
export const useCountStore = create(
  // combine(상태만 있는 객체, 액션만 있는 함수)
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
        // const state = get()
        // state.increaseDouble()
        increaseDouble()
      }
      function increaseDouble() {
        set(state => ({
          double: state.count * 2
        }))
      }
      return {
        increase,
        increaseDouble
      }
    }
  )
)
