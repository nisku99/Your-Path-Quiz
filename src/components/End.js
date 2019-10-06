import React from 'react';


function End(props) {

    const { totalTime, numQuestions, startQuestion } = props;

    return (<div>
        <b>Total time taken:</b> {totalTime}
        <br></br>
        <b>Total number of questions answered:</b> {numQuestions}
        <br></br>
        <b>Start question:</b> {startQuestion}
    </div>);
}

export default End;