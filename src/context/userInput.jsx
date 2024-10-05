import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userInput, setUserInput] = useState('');
    return (
        <UserContext.Provider value={{ userInput, setUserInput }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;