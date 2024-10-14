import React, { useContext, useEffect } from "react";
import "./home.scss";
import useApi from "../../state/hooks/useApi";
import { API_URL } from "../../state/constants/apiUrl";
import WordChances from "../wordChances/wordChances";
import Keyboard from "../keyboard/keyboard";
import MainContext from "../../context/mainContext";

const Home = () => {
    const { data, loading, error } = useApi(API_URL);
    const { setWord } = useContext(MainContext);

    useEffect(() => {
        if (data) {
            setWord(data.toUpperCase());
        }
    }, [data, setWord]); // Adding setWord to the dependency array

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="homeWrapper">
            <WordChances />
            <Keyboard />
        </div>
    );
};

export default Home;


/* import React, { useContext, useEffect, useState } from "react";
import "./home.scss";
import useApi from "../../state/hooks/useApi";
import { API_URL } from "../../state/constants/apiUrl";
import WordChances from "../wordChances/wordChances";
import Keyboard from "../keyboard/keyboard";
import WordContext from "../../context/word";

const Home = () => {
    const { data, loading, error } = useApi(API_URL);
    const {setWord} = useContext(WordContext);
    if (loading || !data) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (data) {
        console.log(data)
        setWord(data);
        return (
            <div className="homeWrapper">
                <WordChances/>
                <Keyboard />
            </div>
        );
    }

};

export default Home; */
