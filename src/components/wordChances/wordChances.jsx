import React, { useContext, useEffect, useState } from "react";
import "./wordChances.scss";
import LineWord from "../lineWord/lineWord";
import Button from "../ux/button/button";
import MainContext from "../../context/mainContext";
import UserContext from "../../context/userInput";

const WordChances = () => {
    
    const rowsQ = 5;
    const [line, setLine] = useState(0);
    const {word} = useContext(MainContext);
    const {userInput, setUserInput} = useContext(UserContext);
    const {userLines, setUserLines} = useContext(UserContext);


    //Make the array of word lines
    useEffect(() => {
        let updateLines = [...userLines]
        updateLines.splice(line, 1, userInput);
        setUserLines(updateLines);
    },[userInput]);
    

    const handleSubmit = () => {
        if(userInput.toUpperCase() === word.toUpperCase()){
            console.log("Ganaste");
        }else{
            setLine(line + 1);
            setUserInput('')
        }
    }

    return (
        <div className="wordChancesWrapper">
           <p>palabra: {word}</p>
           <p>userInput: {userInput}</p>
            <div className="lineWordContainer">
                {
                    [...Array(rowsQ)].map((_, index) => (
                        <LineWord key={index} usrWord={ userLines[index]}/>
                    ))
                }
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
