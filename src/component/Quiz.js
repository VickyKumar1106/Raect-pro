import React from 'react'
import { useState } from 'react';
import './Quiz.css';

const Quiz = () => {

    const Questionbank=[
        {
            Question:"1.Why is a firewall used in a computer?",
            Answers:[
                {Answer:"Monitoring",isCorrect: false},
                {Answer:"data transmission",isCorrect: false},
                {Answer:"Authentication",isCorrect: false},
                {Answer:"Security",isCorrect: true}
            ]

    },
    {
        Question:"2.The full form of DOM is?",
        Answers:[
            {Answer:"Document-oriented memory",isCorrect: false},
            {Answer:"document object model",isCorrect: true},
            {Answer:"document object memory",isCorrect: false},
            {Answer:"none",isCorrect: false}
        ]

},
{
    Question:"3.How many levels are there in the architecture of the database? ",
    Answers:[
        {Answer:"2",isCorrect: false},
        {Answer:"3",isCorrect: true},
        {Answer:"4",isCorrect: false},
        {Answer:"5",isCorrect: false}
    ]

},
{
    Question:"4.Identify the total standard color names that HTML supports.",
    Answers:[
        {Answer:"30",isCorrect: false},
        {Answer:"70",isCorrect: false},
        {Answer:"140",isCorrect: true},
        {Answer:"120",isCorrect: false}
    ]

},
{
    Question:"5.Choose the port number of FTP.",
    Answers:[
        {Answer:"23",isCorrect: false},
        {Answer:"21",isCorrect: true},
        {Answer:"110",isCorrect: false},
        {Answer:"143",isCorrect: false}
    ]

},
{
    Question:"6.Total number of layers in OSI model is___",
    Answers:[
        {Answer:"5",isCorrect: false},
        {Answer:"7",isCorrect: true},
        {Answer:"9",isCorrect: false},
        {Answer:"11",isCorrect: false}
    ]

},
{
    Question:"7.UNIX is written in which language?",
    Answers:[
        {Answer:"C#",isCorrect: false},
        {Answer:"C++",isCorrect: false},
        {Answer:"C",isCorrect: true},
        {Answer:".Net",isCorrect: false}
    ]

},
{
    Question:"8.Which of the following is an extension of image file?",
    Answers:[
        {Answer:".mkv",isCorrect: false},
        {Answer:".gif",isCorrect: true},
        {Answer:".txt",isCorrect: false},
        {Answer:".vdf",isCorrect: false}
    ]

},
{
    Question:"9.Dbase III is?",
    Answers:[
        {Answer:"Hardware",isCorrect: false},
        {Answer:"Firmware",isCorrect: false},
        {Answer:"application software",isCorrect: true},
        {Answer:"operating system",isCorrect: false}
    ]

},
{
    Question:"10.Identify the language which is mainly used for Artificial Intelligence",
    Answers:[
        {Answer:"Java",isCorrect: false},
        {Answer:"J2EE",isCorrect: false},
        {Answer:"Prolog",isCorrect: true},
        {Answer:"C",isCorrect: false}
    ]

},
        ]
// Using useState Hook

const[currentQuestion,setCurrentQuestion]=useState(0);
const[score,setScore]=useState(0);
const[showScore,setShowScore]=useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

    const nextQuestion= currentQuestion+1;
    if(nextQuestion<Questionbank.length)
    {
        setCurrentQuestion(nextQuestion);
    }
    else{
        setShowScore(true);
    }
}
  
const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

  return (
    <>
    <h1> Information Technology MCQ </h1>
    <div className='app'>
      {showScore?(
        <div className='score-section'>
            <h3>You have scored {score} out of {Questionbank.length}</h3>
            <>
               <button type='submit' onClick={resetQuiz}>Play Again !!</button>
            </>
        </div>
      )
    : (
        <>
        <div className='question-section'>
            <div className='question-count'>
                <span>{currentQuestion+1}</span>/{Questionbank.length}
            </div>
            <div className='question-text'>
                {Questionbank[currentQuestion].Question}
            </div>
            <div className='answer-section'>
                {Questionbank[currentQuestion].Answers.map((answer)=>
                (
                    <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                ))}
            </div>

        </div>
        </>
    )}
    </div>
    </>
  )
}

export default Quiz
