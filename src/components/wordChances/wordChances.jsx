import React, { useContext, useEffect, useState } from "react";
import "./wordChances.scss";
import LineWord from "../lineWord/lineWord";
import Button from "../ux/button/button";
import MainContext from "../../context/mainContext";
import UserContext from "../../context/userInput";

const WordChances = () => {
    const rowsQ = 5;
    const [line, setLine] = useState(0);
    const { word } = useContext(MainContext);
    const { userInput, setUserInput } = useContext(UserContext);
    const { userLines, setUserLines } = useContext(UserContext);
    const { evaluation, setEvaluation } = useContext(UserContext);

    //Make the array of word lines
    useEffect(() => {
        let updateLines = [...userLines];
        updateLines.splice(line, 1, userInput);
        setUserLines(updateLines);
    }, [userInput]);

    const evaluateWord = () => {
        let wordArr = word.split("");
        let userArr = userInput.split("");
        let evaluationArr = [];
        for (let i = 0; i < wordArr.length; i++) {
            
            if (wordArr[i] === userArr[i]) {
                evaluationArr.push("X");
            } else if (wordArr.includes(userArr[i])) {
                evaluationArr.push("O");
            } else {
                evaluationArr.push("-");
            }
        }
        setEvaluation((prev) => [...prev, evaluationArr]);
    };

    const handleSubmit = () => {
        evaluateWord();

        if (userInput === word) {
            console.log("Ganaste");
        } else {
            setLine(line + 1);
            setUserInput("");
        }
    };

    return (
        <div className="wordChancesWrapper">
            <p>palabra: {word}</p>
            <p>userInput: {userInput}</p>
            <div className="lineWordContainer">
                {[...Array(rowsQ)].map((_, index) => (
                    <LineWord key={index} usrWord={userLines[index]} color={evaluation[index]}/>
                ))}
            </div>
            <Button
                text="Comprobar"
                action={() => handleSubmit()}
                color="green"
            />
        </div>
    );
};

export default WordChances;
