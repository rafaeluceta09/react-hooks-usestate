import { useState } from "react"
import { UserContext } from "./UserContext"

export const ProviderConext = ({ children }) => {
    const [user, setUser] = useState();
    
  return (
    <UserContext.Provider value={{ user, setUser } }>
        { children }
    </UserContext.Provider>
  )
}
