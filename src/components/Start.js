import React from 'react';


function Start(props) {
    const { onClick } = props;
    return <div
            stlye={{
            }}
        >
            <button
            style={{
                color: 'red',
                background: 'white',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '15%',
                fontSize: 40
            }}
            onClick={onClick}
        >
            Start Quiz!
        </button>
    </div>
    

}


export default Start;