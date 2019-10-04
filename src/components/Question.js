import React from 'react';


function Question(props) {

    const { question, answers, onClick, isLast, onLastClick } = props;

    return <div>
        <p>{question}</p>

        {answers.map(answer => <div key={answer}><button onClick={() => { onClick(); if (isLast) { onLastClick(); } }}>{answer}</button></div>)}
    
    </div>

}


export default Question;