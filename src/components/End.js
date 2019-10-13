import React, { useState } from 'react';
import PDF from './../documents/About This Quiz is Your Reward.pdf'


function End(props) {

    const { totalTime, numQuestions, startQuestion } = props;
    const [show, setShow] = useState(false);


    return (<div style={{fontSize: 30}}>
        <p style={{fontSize: 35, fontWeight: 'bold'}}>You spent {totalTime} of your time taking a quiz that claims to know some unpredictable fact of your future. <span style={{fontFamily: 'arial'}}><b>WHY?</b></span></p>
        <button onClick={() => setShow(true)}>Click here to see why!</button>
        
        {show ? <div style={{alignContent: 'center'}}>
            <br></br>
            <div style={{fontSize: 24, marginRight: '15%', marginLeft: '15%', fontFamily: 'Droid Sans'}}>
            
            <b>There are probably multiple reasons why you decided to take this quiz in the first place. Here are a few potential ones:</b>
            <br></br>
            <ol style={{marginLeft: '5%', marginRight: '5%', textAlign: 'left'}}>
            <li>You were curious what the outcome of the quiz would be</li>
            <li>You were bored and wanted to kill some time</li>
            <li>You wanted to see if your outcome would be better than your friends’ outcomes</li>
            </ol>

            <b>There are probably multiple reasons why you decided to continue to take the quiz, and once again, I will list a few potential ones:</b>
            <br></br>
            <ol style={{marginLeft: '5%', marginRight: '5%', textAlign: 'left'}}>
            <li>You felt the need to start something that you finished (the progress bar showing 100% was important to you)</li>
            <li>You were really invested in the outcome of the quiz</li>
            <li>You were curious to see what the next question would be</li>
            <li>You felt a sense of accomplishment when you saw the progress bar increase, thus increasing the so-called “prediction strength”</li>
            </ol>

            Though your conscious reasons may or may not have been the same as the ones that I mentioned above, they all had something to do with a subconscious desire for reward. 

            What you probably didn't know was that this quiz, as well as quizzes (and social media) like it, was specifically created to prey on that subconscious desire for reward. In fact, the book Hooked: How to Build Habit-Forming Products, spends hundreds of pages explaining exactly why products, such as this quiz, take up so much of our time. Makers of social media sites and Buzz-Feed-like quizzes have spent much of their time understanding the human psychological draw towards 3 rewards: the rewards of the self, the hunt, and the tribe (Hooked). Briefly, I would like to explain these rewards to you:
            <br></br>
            <ul style={{marginLeft: '5%', marginRight: '5%', textAlign: 'left'}}>
            
            
            <li><b style={{color: 'purple'}}>Rewards of the Self:</b> Rewards we seek for “personal gratification” (according to Nir Eyal’s blog on <a href="https://www.nirandfar.com/want-to-hook-your-users-drive-them-crazy/">NirandFar.com</a>)</li>
            <li><b style={{color: 'purple'}}>Rewards of the Tribe:</b> Rewards that make us feel “accepted, important, attractive, and included” in the context of society as a whole (according to Hooked).</li>            
            <li><b style={{color: 'purple'}}>Rewards of the Hunt:</b> Rewards we get while searching for or anticipating something (according to Nir Eyal’s blog on <a href="https://www.nirandfar.com/want-to-hook-your-users-drive-them-crazy/">NirandFar.com</a>)</li>
            </ul>
            According to Daria Kuss’ and Mark Griffiths’ review entitled, “Online Social Networking and Addiction,” addiction to these rewards is what causes users to spend their time on quizzes like this one. When you receive stimulation by way of achieving these rewards during your time on social media (or taking random quizzes), you essentially become “hooked” on the feeling (Hooked). You then become a victim of the quiz or media creator’s active attempt to make money off of your wasted time. 
            <br/><br/>
            <b>Here are just a few examples of how I designed the quiz to pray specifically on your subconscious draw towards the rewards of the self, tribe and hunt:</b> 
            <ul style={{marginLeft: '5%', marginRight: '5%', textAlign: 'left'}}>
            <li><b style={{color: 'purple'}}>Self:</b>
            <ol>
            <li>The quiz claims to provide a prediction about the future, which you are curious to know about or might gain satisfaction from if the prediction is positive</li>
            <li>The random wait times between questions coupled with the progress bar makes you want to finish the quiz and prove to yourself that you are not a quitter. I even called out that patience is a predictor of a high salary or a healthy future relationship (from <a href="https://www.mindful.org/the-benefits-of-being-a-patient-person/">www.mindful.org</a>). If you take the quiz, you will feel as though you have proved yourself to be patient.</li> 
            </ol>
            </li>
            <li>
            <b style={{color: 'purple'}}>Tribe:</b>
            <ol>
            <li>
            The quiz states on the cover page that you can “compare your results with friends that have taken the quiz!” Thus, by taking the quiz, you will have a measure to compare yourself to or “fit in” with society. 
            </li>
            </ol>
            </li>
            <li>
            <b style={{color: 'purple'}}>Hunt:</b>

            <ol>
            <li>
                The randomized wait times between questions, the progress bar, and the large number of questions it takes to get to an “outcome” increase anticipation. Thus, the user is “driven by the pursuit itself” (Hooked). 
            </li>
            </ol>
            <br></br>
            Can you think of any more? 
            </li>
            </ul>
            Are you <b>frustrated</b> that I designed this quiz specifically to trap you by offering a multitude of options for rewards of the self, tribe and hunt? <b style={{fontSize: 35}}>Don’t be.</b> Because now you know exactly how social media companies and online quizzing platforms are targeting and capturing your precious time. According to Nir Eyal’s blog post on <a href="https://www.nirandfar.com/want-to-hook-your-users-drive-them-crazy/">NirandFar.com</a>, almost all social media platforms that create habitual users combine all three of these rewards. 
                        
            
            </div>
            <br></br>
            <p style={{fontSize: 25, fontFamily: 'Droid Sans', color: 'purple', fontWeight: 'bold'}}>Now that you know that this quiz (and quizzes like it) employ addictive strategies to draw you in, would you take this quiz again if it promised to return a result?</p>
            </div> : null}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span><a style={{fontFamily: 'arial', color: 'purple', fontWeight: 'bold'}} href={PDF} target="__blank">More about this Quiz!</a></span>
            <br></br>
            <br></br>
            
    </div>);
}

export default End;