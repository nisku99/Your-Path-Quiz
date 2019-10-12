import React, { useState } from 'react';
import Start from './components/Start';
import End from './components/End';
import Question from './components/Question';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [questionNumber, setQuestionNumber] = useState(-1);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showQuestion, setShowQuestion] = useState(true);
  const [done, setDone] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [startQuestion, _] = useState(Math.floor(2 * Math.random()));

  const questions = [
    {'question': 'Which of these colors is your favorite?', 'answers': ['Red', 'Blue', 'Green', 'Black']},
    {'question': 'What type of pet do you want?', 'answers': ['Dog', 'Cat', 'Hamster', 'None']},
    {'question': 'What is your favorite pattern?', 'answers': ['Polka Dot', 'Striped', 'Floral', 'Solid']},
    {'question': 'Which show do you like to watch the most?', 'answers': ['Friends', 'The Office', 'Gossip Girl', 'Breaking Bad']},
    {'question': 'How many siblings do you have?', 'answers': ['0', '1', '2', '3+ ']},
    {'question': 'Can you drive?', 'answers': ['Yes', 'No', 'I wish ', 'Yes, but poorly']},
    {'question': 'Are you in a relationship?', 'answers': ['Yes', 'No', "It's more of a...situationship...", 'No, but I want to be']},
    {'question': 'What is your favorite condiment?', 'answers': ['Ketchup', 'Mustard', 'Siracha', 'Plain and simple, please']},
    {'question': 'What is your favorite subject?', 'answers': ['History', 'Math', 'English', 'Science', 'Sports']},
    {'question': 'What word would people use to describe you?', 'answers': ['Funny', 'Smart', 'Kind', 'Unique']},
    {'question': 'How easy is it for your to make decisions?', 'answers': ['First choice, right choice!', 'I like to weigh out the options', 'You choose!']},
    {'question': 'How timely are you?', 'answers': ['Right on time is LATE!', 'Always right on the money', '5-10 minutes late', '"I\'m on my way..." ']},
    {'question': 'What role do you play in your friend group?', 'answers': ['Comedian', 'Social Planner / Host', 'Peace-maker', 'umm...idk, a normal role?']},
    {'question': 'What is your favorite thing to eat?', 'answers': ['Tacos', 'Pizza', 'Something Healthy', 'Ice cream / Dessert']},
    {'question': 'Do you like to cook?', 'answers': ['Yes', 'No', 'Yes, but I wish I was good at it', 'No, but I wish I did']},
    {'question': 'Have you been out of the country?', 'answers': ['No', 'Yes, once', 'Yes, multiple times', 'Yes; I was born to travel!']},
    {'question': 'How many alarms do you set in the morning?', 'answers': ["None, I'm  a natural early riser!", 'None, I always sleep in ', '1', '2-3 (snoozing counts)', '4+']},
    {'question': 'How quickly do you respond to messages?', 'answers': ['Right away', 'Usually within the hour', 'Usually within the day', 'Whenever I remember... ']},
    {'question': 'What would you buy with lottery money?', 'answers': ['A new car', 'A house/apartment', 'Many 3 course dinners', 'A huge vacation', 'I would save/invest it']},
    {'question': 'What is your favorite chip flavor?', 'answers': ['Orignal', 'Ruffled', 'Bbq', 'Salt & Vinegar', 'Cheddar']},
    {'question': 'What is your favorite dip? ', 'answers': ['Ranch', 'Cheese Dip', 'Guac', 'Chocolate', 'Hummus']},
    {'question': 'How many books have you read since January?', 'answers': ['0', '1', '2-5', '5+']},
    {'question': 'At what time do you prefer to wake up?', 'answers': ['6:00 AM', 'Between 7:00and 8:00AM ', 'Between 8:00 and 10:00 AM', 'After 10 AM']},
    {'question': 'What season is your favorite?', 'answers': ['Summer', 'Fall', 'Winter', 'Spring', 'All of them!']},
    {'question': 'What is your favorite activity?', 'answers': ['Netflix (and chill?) ', 'Eating and Sleeping', 'Hiking/Biking', 'Swimming/Tubing/Water-Skiing']},
    {'question': 'At what temperature (F) are you most comfortable? ', 'answers': ['60-65 degrees ', '65-70 degrees ', '70-75 degrees ', '75+ degrees ']},
    {'question': 'What would you carry with you to work every day?', 'answers': ['Purse', 'Backpack', 'Nothing']},
  ];

  const statements = [
    'Answer these questions and we will tell you what your future career will be!',
    'Answer these questions and we will tell you how rich you will be in 15 years!',
    'Answer these questions and we will tell you what your love life will be like in 5 years!'
  ];


  const totalSeconds = (endTime - startTime) / 1000;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds - minutes * 60);
  const now = Math.floor(questionNumber * 10000 / questions.length) / 100;

  return (
    <div className="App" style={{fontFamily: "'Great Vibes', cursive"}}>

      <h1 style={{paddingTop: 50, fontWeight: 'bold', fontSize: 60}}>This Quiz is your Reward</h1>
      <h2 style={{paddingTop: 50, fontSize: 50, fontWeight: 'bold'}}>{statements[startQuestion]}</h2>
      
      {questionNumber === -1 ? <div>      
        <h3 style={{paddingTop: 50, fontSize: 35, fontWeight: 'bold'}}>Compare your results with friends that have taken the quiz!</h3>
        <h3 style={{paddingTop: 50, fontSize: 35, fontWeight: 'bold'}}>Patience may be associated with happier relationships and higher earning potential, so please forgive any slow loading times!</h3>
        <Start onClick={() => { setQuestionNumber(questionNumber + 1); setStartTime(new Date()); } }>
        </Start></div>: null}
        <br></br>
        {questionNumber !== -1 && !done ? <div style={{fontSize: 30}}>Prediction Strength:</div> : null }
      {questionNumber !== -1 && !done ? <ProgressBar style={{marginLeft: "10%", marginRight: "10%"}} now={now} label={`${now}%`} /> : null }
      {questionNumber >= 0 && questionNumber < questions.length && showQuestion && !done && !showSpinner ?
        <div>
        
        <Question question={questions[questionNumber].question} answers={questions[questionNumber].answers} isLast={questionNumber + 1 === questions.length} onLastClick={() => setEndTime(new Date())} onClick={
          () => {
            setShowSpinner(true);
            setTimeout(() => {
              setQuestionNumber(questionNumber + 1);
              setShowSpinner(false);
            }, Math.random(0) * (questionNumber + 1) * 1000)
        }}>
        </Question>
        <br></br>
        <br></br>
        <button style={{background: 'red', color: 'white', fontSize: 30}} onClick={() => {setDone(true); setEndTime(new Date())}}>Forget it, I quit the quiz</button>

        </div>
         : null
      }
      <br></br>

      {showSpinner ? <Spinner animation="border"></Spinner> : null}

      {
        questionNumber >= questions.length || done ? <End totalTime={`${minutes} minutes and ${seconds} seconds`} numQuestions={questionNumber} startQuestion={statements[startQuestion]} ></End> : null
      }



    </div>
  );
}

export default App;
