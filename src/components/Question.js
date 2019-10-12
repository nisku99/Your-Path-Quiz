import React from 'react';


function Question(props) {

    const { question, answers, onClick, isLast, onLastClick } = props;

    return <div>
        <p style={{fontSize: 40}}>{question}</p>

        {answers.map(answer => <div key={answer}><button style={{fontSize: 30, color: 'red', 'background': 'white'}} onClick={() => { onClick(); if (isLast) { onLastClick(); } }}>{answer}</button></div>)}
    
    </div>

}


export default Question;