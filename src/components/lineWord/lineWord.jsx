import React, { useContext } from "react";
import "./lineWord.scss";
import Squares from "../ux/squares/squares";
import MainContext from "../../context/mainContext";
import UserContext from "../../context/userInput";
const LineWord = ({usrWord}) => {
    /* const {word} = useContext(MainContext);
    const {userInput} = useContext(UserContext); */
    /* const {userLines} = useContext(UserContext); */
    const columQ = 5;
    const word = usrWord;
    
    return (
        <div className="lineWordWrapper">
            {
                [...Array(columQ)].map((_, index) => (
                    <Squares key={index} letter={word ? word[index] : ''}/>
                ))
            }
        </div>
    );
};

export default LineWord;
