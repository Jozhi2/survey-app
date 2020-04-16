import React, { useState } from 'react';
import './inputSurvey.css';


const InputSurvey = (props) => {

    const [answer, getAnswer] = useState('')

    return(
        <div>
            <label
                htmlFor={"question"+props.keyInput}
                className={"questionLabel"}
                >{props.question}</label>
            <input
                name={"question"+props.keyInput} 
                type={"text"} 
                className={"inputAnswer"} 
                placeholder=""
                value={answer}
                onChange={e => getAnswer(e.target.value)}
                required
            />
        </div>
    ) 
}

export default InputSurvey