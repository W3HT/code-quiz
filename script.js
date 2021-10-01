// selectors
var startBtn = document.getElementById("startBtn");
var questionContainerDiv = document.getElementById("questions-container");

var currentQuestionIndex;
// call global variables
var secondsLeft = document.getElementById("secondsLeft");

var answerBtnElement = document.getElementById("optsion-btns");
var scoreCounter = 0;
var timer;
var timerCount = 20;
var questionAsk = document.getElementById("questionAsk")
var answerA = document.getElementById("btn-1")
var answerB = document.getElementById("btn-2")
var answerC = document.getElementById("btn-3")
var answerD = document.getElementById("btn-4")
var nextQuestion;

// arrays
const questions = [
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    }
]







// function startGame
// function startGame () {
   
function startGame() {
   
    console.log("YEET");

    startBtn.classList.add("hide");
    questionContainerDiv.classList.remove("hide");
    currentQuestionIndex = 0;
  
    startTimer();
    
}

// // function startTimer
function startTimer() {
    timer = setInterval(function() {
    timerCount--;
    secondsLeft.textContent = timerCount;
    console.log(secondsLeft);
        if (timerCount <= 0) {
        clearInterval(timer);
        if(currentQuestionIndex < questions.length -1) {}
        score();
        }

       
    }, 1000)

    displayQuestion()
    
}
// function load question

function displayQuestion() {
    nextQuestion();
}

    //event listener
    


     
        // button pressed
        // correct
            //next question
function nextQuestion() {
    questionAsk.textContent = questions[currentQuestionIndex].question;
    answerA.textContent = questions[currentQuestionIndex].answers[0]
    answerB.textContent = questions[currentQuestionIndex].answers[1]
    answerC.textContent = questions[currentQuestionIndex].answers[2]
    answerD.textContent = questions[currentQuestionIndex].answers[3]
}


// function score() {
//     scoreCounter++


// }
//         // 
        
startBtn.addEventListener('click', startGame)