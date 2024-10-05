import React, { createContext, useState } from 'react';

// Create the context
const MainContext = createContext();

// Create a provider component
export const MainContextProvider = ({ children }) => {
    const [word, setWord] = useState('');
    const [counter, setCounter] = useState(0);

    return (
        <MainContext.Provider value={{ word, setWord, counter, setCounter }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainContext;