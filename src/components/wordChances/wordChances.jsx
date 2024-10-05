import React, { useContext } from "react";
import "./wordChances.scss";
import LineWord from "../lineWord/lineWord";
import Button from "../ux/button/button";
import MainContext from "../../context/mainContext";

const WordChances = () => {
    const {word} = useContext(MainContext);
    return (
        <div className="wordChancesWrapper">
           <p>palabra: {word}</p>
            <div className="lineWordContainer">
                <LineWord />
                <LineWord />
                <LineWord />
                <LineWord />
                <LineWord />
            </div>
            <Button
                text="Comprobar"
                action={() => console.log("Comprobar")}
                color="green"
            />
        </div>
    );
};

export default WordChances;
