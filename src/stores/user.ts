import { create } from 'zustand'
import { combine } from 'zustand/middleware'
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
            city: 'Suwon',
            emails: ['neo1@gmail.com', 'neo2@naver.com']
          }
        }
      },
      set => ({
        setUserEmail(email: string) {
          set(state => {
            state.user.address.emails[0] = email
          })
          // set(state => ({
          //   user: {
          //     ...state.user,
          //     address: {
          //       ...state.user.address,
          //       emails: [email, state.user.address.emails[1]]
          //     }
          //   }
          // }))
        }
      })
    )
  )
)
