import { combine } from 'zustand/middleware'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Neo',
          age: 22,
          isValid: true,
          address: {
            city: 'suwon',
            emails: ['neo@gmail.com', 'neo2@naver.com']
          }
        }
      },
      set => ({
        setUserEmail(email: string) {
          set(state => {
            state.user.address.emails[0] = email
          })
        }
        // setUserEmail(email: string) {
        //   set(state => ({
        //     user: {
        //       ...state.user,
        //       address: {
        //         ...state.user.address,
        //         emails: [email, state.user.address.emails[1]]
        //       }
        //     }
        //   }))
        // }
      })
    )
  )
)
