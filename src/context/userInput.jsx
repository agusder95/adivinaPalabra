import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userInput, setUserInput] = useState('');
    const [userLines, setUserLines] = useState([]);
    return (
        <UserContext.Provider value={{ userInput, setUserInput, userLines, setUserLines }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;