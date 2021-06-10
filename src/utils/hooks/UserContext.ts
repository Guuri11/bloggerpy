import { createContext, useContext } from "react"
import { UserInterface } from "../interfaces/user"

export type UserType = {
    user: UserInterface|null
    setUser:(user: UserInterface|null) => void
  }

export const UserContext = createContext<UserType>({
    user: null,
    setUser: () =>{}
})

export const useUserContext = () => useContext(UserContext)