import React, { useContext } from "react";
import "./keyboard.scss";
import Squares from "../ux/squares/squares";
import UserContext from "../../context/userInput";

const Keyboard = () => {
    const { userInput, setUserInput } = useContext(UserContext);
    const keys = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

    return (
        <div className="keyboardWrapper">
            {keys.map((key, index) => {
                return (
                    <Squares
                        action={() =>
                            userInput.length < 5
                                ? setUserInput(userInput.concat(key))
                                : ""
                        }
                        /* color={userInput.includes(key) ? "disabled" : ""} */
                        key={index}
                        letter={key}
                    />
                );
            })}
        </div>
    );
};

export default Keyboard;
