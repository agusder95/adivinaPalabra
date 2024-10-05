import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainContextProvider } from "./context/mainContext.jsx";
import { UserContextProvider } from "./context/userInput.jsx";


createRoot(document.getElementById("root")).render(
    <>
        <MainContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </MainContextProvider>
    </>
);
