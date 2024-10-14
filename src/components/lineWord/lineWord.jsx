import React, { useContext, useEffect, useState } from "react";
import "./lineWord.scss";
import Squares from "../ux/squares/squares";
import MainContext from "../../context/mainContext";
import UserContext from "../../context/userInput";
const LineWord = ({ usrWord, color }) => {
    const columQ = 5;

    return (
        <div className="lineWordWrapper">
            {[...Array(columQ)].map((_, index) => (
                <Squares
                    key={index}
                    letter={usrWord ? usrWord[index] : ""}
                    color={color && color[index]}
                />
            ))}
        </div>
    );
};

export default LineWord;
