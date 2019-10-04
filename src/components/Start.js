import React from 'react';


function Start(props) {
    const { onClick } = props;
    return <div
            stlye={{
            }}
        >
            <button
            style={{
                color: 'white',
                background: 'red',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '50%',
                fontSize: 40
            }}
            onClick={onClick}
        >
            START QUIZ!
        </button>
    </div>
    

}


export default Start;