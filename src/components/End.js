import React from 'react';


function End(props) {

    const { totalTime, numQuestions } = props;

    return (<div>
        <b>Total time take:</b> {totalTime}
        <br></br>
        <b>Total number of questions answered:</b> {numQuestions}
    </div>);
}

export default End;