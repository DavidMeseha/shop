import { createContext, useState } from "react";
import { SessionProvider } from 'next-auth/react'

const UserContext = createContext({})

export const UserProvider = ({ session, children }) => {
    

    return (
        <SessionProvider session={session} >
            <UserContext.Provider value={{}}>
                {children}
            </UserContext.Provider >
        </SessionProvider>
    )
}

export default UserContext