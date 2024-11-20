import { create } from 'zustand'
import { combine, persist, subscribeWithSelector } from 'zustand/middleware'

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
  persist(
    // local storage 에 abced 키로 저장한다.
    subscribeWithSelector(
      // combine(상태만 있는 객체, 액션만 있는 함수)
      combine(
        {
          count: 0,
          double: 0
        },
        set => {
          function updateDouble() {
            set(state => ({
              double: state.count * 2
            }))
          }
          function increase() {
            set(state => ({
              count: state.count + 1
            }))
            // const state = get()
            // state.increaseDouble()
            // updateDouble()
          }
          function decrease() {
            set(state => ({
              count: state.count - 1
            }))
            // updateDouble()
          }
          return {
            increase,
            decrease,
            updateDouble
          }
        }
      )
    ),
    {
      name: 'abced'
    }
  )
)

// useCountStore.subscribe(선택자, 콜백)
useCountStore.subscribe(
  state => {
    return state.count
  },
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
