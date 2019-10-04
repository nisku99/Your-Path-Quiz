import React, { useState } from 'react';
import Start from './components/Start';
import End from './components/End';
import Question from './components/Question';
import './App.css';
import { start } from 'pretty-error';


function App() {

  const [questionNumber, setQuestionNumber] = useState(-1);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showQuestion, setShowQuestion] = useState(true);
  const [done, setDone] = useState(false);

  const questions = [
    {
      question: "Where Do You Like To Go When You Eat Out?",
      answers: [
        "Pollo Tropical",
        "Chipotle",
        "McDonalds",
        "Chick-fil-a"
      ]
    },
    {
      question: "Do You Like To Cook?",
      answers: [
        "Yes",
        "No"
      ]
    },
    {
      question: "Could You Live Without The Internet?",
      answers: [
        "Yes",
        "No"
      ]
    }
  ];


  const totalSeconds = (endTime - startTime) / 1000;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds - minutes * 60);

  return (
    <div className="App">
      <h1>YOUR PATH QUIZ</h1>
      {questionNumber === -1 ? <Start onClick={() => { setQuestionNumber(questionNumber + 1); setStartTime(new Date()); } }></Start>: null}

      {questionNumber >= 0 && questionNumber < questions.length && showQuestion && !done ?
        <div>
        <Question question={questions[questionNumber].question} answers={questions[questionNumber].answers} isLast={questionNumber + 1 === questions.length} onLastClick={() => setEndTime(new Date())} onClick={() => setQuestionNumber(questionNumber + 1)}>
        </Question>
        <br></br>
        <br></br>
        <button style={{background: 'red', color: 'white'}} onClick={() => {setDone(true); setEndTime(new Date())}}>Forget it, I quit the quiz</button>

        </div>
         : null
      }

      {
        questionNumber >= questions.length || done ? <End totalTime={`${minutes} mintues and ${seconds} seconds`} numQuestions={questionNumber} ></End> : null
      }



    </div>
  );
}

export default App;
