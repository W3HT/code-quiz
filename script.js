// selectors
var startBtn = document.getElementById("startBtn");
var questionContainerDiv = document.getElementById("questions-container");
var questionAsk = document.getElementById("questionAsk")
var currentQuestionIndex;
// call global variables
var secondsLeft = document.getElementById("secondsLeft");

var answerBtnElement = document.getElementById("optsion-btns");
var scoreCounter = 0;
var timer;
var timerCount = 20;
var answerA = document.getElementById("btn-1")
var answerB = document.getElementById("btn-2")
var answerC = document.getElementById("btn-3")
var answerD = document.getElementById("btn-4")
const questions = [
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    }
]





// arrays

// function startGame
// function startGame () {
   
function startGame() {
    startTimer();
    console.log("YEET");

    startBtn.classList.add("hide");
    questionContainerDiv.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();


    
}

// function startTimer
function startTimer() {
    timer = setInterval(function() {
    timerCount--;
    secondsLeft.textContent = timerCount;
    console.log(secondsLeft);
    if (timerCount === 0) {
        clearInterval(timer);
        score();
            }

       
    }, 1000)
    
}
// function load question

function displayQuestion(questions) {
    currentQuestionIndex = 0;
}

    //event listener
    


     
        // button pressed
        // correct
            //next question
function nextQuestion() {
    questionAsk.textContent = questions[indexxxx].question;
    answerA.textContent = questions[indexxxx].answers[0]
    answerB.textContent = questions[indexxxx].answers[1]
    answerC.textContent = questions[indexxxx].answers[2]
    answerD.textContent = questions[indexxxx].answers[3]

} 

function score() {
    scoreCounter++


}
        // 
        
startBtn.addEventListener('click', startGame)      