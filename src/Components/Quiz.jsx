import React, { useState, useContext } from 'react';
import { Questions } from './Helpers/QuestionBank';
import { QuizContext } from './Helpers/Contexts';

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
    setOptionChosen(""); // Reset the chosen option for the next question
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button
          onClick={() => setOptionChosen("A")}
          className={optionChosen === "A" ? "selected" : ""}
        >
          <span className="option-letter">(a)</span> {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => setOptionChosen("B")}
          className={optionChosen === "B" ? "selected" : ""}
        >
          <span className="option-letter">(b)</span> {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => setOptionChosen("C")}
          className={optionChosen === "C" ? "selected" : ""}
        >
          <span className="option-letter">(c)</span> {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => setOptionChosen("D")}
          className={optionChosen === "D" ? "selected" : ""}
        >
          <span className="option-letter">(d)</span> {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
