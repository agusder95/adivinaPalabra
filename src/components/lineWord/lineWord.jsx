import React, { useContext } from "react";
import "./lineWord.scss";
import Squares from "../ux/squares/squares";
import MainContext from "../../context/mainContext";
import UserContext from "../../context/userInput";
const LineWord = () => {
    const {word} = useContext(MainContext);
    const {userInput} = useContext(UserContext);
    return (
        <div className="lineWordWrapper">
            <Squares letter={''}/>
            <Squares letter={''}/>
            <Squares letter={''} color={''}/>
            <Squares letter={''}/>
            <Squares letter={''}/>
        </div>
    );
};

export default LineWord;
