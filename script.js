// selectors
var startBtn = document.getElementById("startBtn")
var questionContainerDiv = document.getElementById("questions-container")
var currentQuestionIndex
// call global variables
var secondsLeft = 60;
var questionElement = document.getElementById("question")
var answerBtnElement = document.getElementById("optsion-btns")
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
// function load question

function displayQuestion(questions) {
    questionElement.innerText = question.question
}

    //event listener
    


     
        // button pressed
        // correct
            //next question
function nextQuestion() {

}       
        // 
        
startBtn.addEventListener('click', startGame)      