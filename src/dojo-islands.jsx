// Import necessary modules
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import Building from './Building';

const DojoIslands = () => {
    const [isQuizActive, setIsQuizActive] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // init logic if needed
    }, []);

    const startQuiz = () => {
        setIsQuizActive(true);
    };

    const handleQuizScore = (newScore) => {
        setScore(newScore);
        setIsQuizActive(false);
    };

    return (
        <div className="dojo-islands">
            <h1>Dojo Islands</h1>
            <button onClick={startQuiz}>Start Quiz</button>
            {isQuizActive && <Quiz onScore={handleQuizScore} />}
            {!isQuizActive && <Building score={score} />}
        </div>
    );
};

export default DojoIslands;
