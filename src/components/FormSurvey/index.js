import React, { useState, useEffect } from 'react';
import InputSurvey from '../InputSurvey'
import './formSurvey.css';

const FormSurvey = () => {

    const [dataQuestion, setDataQuestion] = useState([]);

    //get question from API
    useEffect(() => {
        if(dataQuestion.length === 0){
            fetch('https://trivia.propernerd.com/api/questions?limit=5')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                setDataQuestion(myJson)
            })
            .catch((err) => {
                console.error(err);
            })
        }
    },[])

    const getAllAnswers = e =>{
        //get answers from the user and create a new object
        const answers = dataQuestion.map((element)=>{
            return {[element.id] : e.target["question"+element.id].value}
        })

        //sending the reponse with all the data
        console.log(answers);

        fetch("fake/api", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(answers),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(response => console.log('Success:', response))
          .catch(error => console.error('Error:', error))

        e.preventDefault();
    }
    return(
        <form onSubmit={getAllAnswers}>
            <div className={"questionContainer"}>
                {dataQuestion?.map((element) => (
                    <InputSurvey 
                        key={element.id}
                        keyInput={element.id}
                        question={element.question}
                    />
                ))}
                
                <input
                    className="submitSurvey"
                    type="submit"
                />
            </div>
        </form>
    );
}

export default FormSurvey;