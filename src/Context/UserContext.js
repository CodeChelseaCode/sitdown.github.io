import React, {useContext, useState} from 'react'

const UserContext = React.createContext({user: {},
    editUser: () => {}
    })

export function useUser() {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        userName: 'First Last',
        bio: 'Description about You',
        profileImage: ''
    })
    const submitEdit = (updatedUser) => {
        setUser(updatedUser)
    }

    const contextVals = {
        user: user,
        editUser: (uu) => submitEdit(uu)
    }
    return <UserContext.Provider value={contextVals} >
        {children}
    </UserContext.Provider>
}
