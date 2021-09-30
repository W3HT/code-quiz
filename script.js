// selectors
var startBtn = document.getElementById("startBtn")
var questionContainerDiv = document.getElementById("questions-container")
var currentQuestionIndex
// call global variables
var secondsLeft;
var questionElement = document.getElementById("question")
var answerBtnElement = document.getElementById("optsion-btns")
var scoreCounter = 0;
var timer;
var timerCount = 20;
const questions = [
    {
        question: "What is an array?",
        answers: [
            {text: "An array is a special variable, which can hold more than one value at a time.", correct: true},
            {text: "It's a fish", correct: false},
            {text: "It's a fish", correct: false},
            {text: "It's a fish", correct: false},

        ]
        
    }
]





// arrays

// function startGame
// function startGame () {
   
function startGame() {
    console.log("YEET")
    startBtn.classList.add("hide")
    questionContainerDiv.classList.remove("hide")
    currentQuestionIndex = 0
    nextQuestion()


    
}

// function startTimer
function startTimer() {
    timer = setInterval(function() {
    timerCount--;
    timerElement = timerCount;
    if (timerCount =< 0) {
        clearInterval(timer);
        score();
            }

        }
    })
    
}
// function load question

function displayQuestion(questions) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", )
    })
}

    //event listener
    


     
        // button pressed
        // correct
            //next question
function nextQuestion() {

} 

function score() {
    scoreCounter++


}
        // 
        
startBtn.addEventListener('click', startGame)      