import React, { useState } from 'react';


function End(props) {

    const { totalTime, numQuestions, startQuestion } = props;
    const [show, setShow] = useState(false);


    return (<div style={{fontSize: 30}}>
        <p style={{fontSize: 35, fontWeight: 'bold'}}>You spend {totalTime} of your time taking a quiz that claims to know some unpredictable aspect of your future. <span style={{fontFamily: 'arial'}}><b>WHY?</b></span></p>
        <button onClick={() => setShow(true)}>Click here to see why!</button>
        
        {show ? <div>
            <br></br>
            <p style={{fontFamily: 'arial', fontSize: 24}}>Lipsum Orem</p>
            <p style={{fontSize: 35}}>Now that you know that this quiz (and quizzes like it) employ addictive strategies to draw you in, would you take this quiz again if it promised to return a result?</p>
            </div> : null}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span><a style={{fontFamily: 'arial'}} href="https://www.google.com" target="__blank">More about this Quiz!</a></span>
            
    </div>);
}

export default End;