
import './App.css';
import question  from './components/questions';
import {useState } from 'react';
import React from 'react';

function App () {
  const [questionIndex,  setquestionIndex]= useState(0);
  const present_question = questions[questionIndex];
const getchoice = (index) => {
    if(present-question.answer===index)
    {
      alert("success, you got right answer")
    }

  };
  return (
  <div className="quiz-box">
    <div className="quiz-question">
      {present_question.question}
     
        <div className="quiz-box-options"></div>
      <ul className="quiz-ul">
      {present_question.options.map((option,i) => { return <li className="quiz-li" onClick = {()=> get-choice (i)}>{option}</li>  })}
      
       </ul>
    </div>
  </div>
  );

}

export default App;
