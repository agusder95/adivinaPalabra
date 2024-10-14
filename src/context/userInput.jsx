import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userInput, setUserInput] = useState("");
    const [userLines, setUserLines] = useState([]);
    const [evaluation, setEvaluation] = useState([]);
    return (
        <UserContext.Provider
            value={{
                userInput,
                setUserInput,
                userLines,
                setUserLines,
                evaluation,
                setEvaluation,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
