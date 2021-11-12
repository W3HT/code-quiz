// selectors



var high

// call global variables



var startBtn = document.getElementById("startBtn");
var timer;
var timerCount = 20;

var currentQuestionIndex;
var nextQuestion;

var questionAsk = document.getElementById("questionAsk")
var questionContainerDiv = document.getElementById("questions-container");
var answerA = document.getElementById("btn-1")
var answerB = document.getElementById("btn-2")
var answerC = document.getElementById("btn-3")
var answerD = document.getElementById("btn-4")

var listOfHighScores = document.getElementById("listOfHighScores")
var initInput = document.getElementById("initInput")

var scoreBox = document.getElementById("scoreBox")
var submitInitBtn = document.getElementById("submitInitBtn")
var secondsLeft = document.getElementById("secondsLeft");
var scoreCounter = 0;
var finalScore = document.getElementById("finalScore");
var savedScores;


// arrays
const questions = [
    {
        question: "What is an array?",
        answers: ["A.  An array is a special variable, which can hold more than one value at a time.","B.  its a fish.", "C.  its a fruit","D.  its a banana"], answer: "A.  An array is a special variable, which can hold more than one value at a time."
    },
    {
        question: "Who invented Javascript?",
        answers: ["A. Michael Jordan","B.  Brendan Eich.", "C.  John Doe","D.  La Bamba"], answer: "B.  Brendan Eich."
    },
    {
        question: "What is the first index in an array?",
        answers: ["A.  Z","B.  1", "C.  0","D.  A"], answer: "C.  0"
    },
    {
        question: "How do you comment in Javascript?",
        answers: ["A.  ** Comment Here","B.  ?! Comment Here", "C.  ~~ Comment Here","D.  // Comment Here"], answer: "D.  // Comment Here"
    }
]

console.log(localStorage.getItem("scoreboard"))

// function startGame

   
function startGame() {
   
    console.log("YEET");

    startBtn.classList.add("hide");
    questionContainerDiv.classList.remove("hide");
    currentQuestionIndex = 0;
    initInput.textContent = "";
  
    startTimer();
    
}

// function startTimer
function startTimer() {
    var timer = setInterval(function() {
    timerCount--;
    secondsLeft.textContent = timerCount;
        if (timerCount <= 0) {
        clearInterval(timer);
        if(currentQuestionIndex < questions.length -1) {
        endGame();
        }

    }

    }, 1000)

    displayQuestion()
    
}
// function load question

function displayQuestion() {
    nextQuestion();
}

// next question  
function nextQuestion() {
    questionAsk.textContent = questions[currentQuestionIndex].question;
    answerA.textContent = questions[currentQuestionIndex].answers[0]
    answerB.textContent = questions[currentQuestionIndex].answers[1]
    answerC.textContent = questions[currentQuestionIndex].answers[2]
    answerD.textContent = questions[currentQuestionIndex].answers[3]
}

// check answers
function checkAnswer(answer) {
    if(questions[currentQuestionIndex].answer === questions[currentQuestionIndex].answers[answer]) {
    scoreCounter++;
    }
        else {
            timerCount -= 10;
            secondsLeft.textContent = timerCount;
        }
    currentQuestionIndex++;
    if( currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        endGame();
    }
    
}

function answerAA() {
    checkAnswer(0);
}

function answerBB() {
    checkAnswer(1);
}


function answerCC() {
    checkAnswer(2);
}


function answerDD() {
    checkAnswer(3);
}

//     scoreCounter++
function endGame() {
    questionContainerDiv.classList.add("hide")
    scoreBox.classList.remove("hide")
    submitInitBtn.classList.remove("hide")
    finalScore.textContent = scoreCounter;
    saveScore();
    // scoreBoard();
    

}

// function scoreboard() {
//     // event.preventDefault();
//     listOfHighScores.textContent = savedScores
//     var listOfScores = JSON.parse(localStorage.getItem("scoreBoard"));
// }var savedScores = {
//     initInput.textContent , finalScore.value
// }

function saveScore() { 
          
        localStorage.setItem("scoreBoard", JSON.stringify(saveScores));
        console.log.getItem(savedScores)

}
 
    

//     if (initInput.value === "") {
//         alert("Please enter your initials ");
//         return;
//     }


    var savedScores = localStorage.getItem("high score");
    var highScores = []

    if (savedScores === null) {
        highScores =[];
    } else {
        highScores =  JSON.parse(savedScores)
    }

    var playerScore = {
        initials: initInput.value,
        score: finalScore.textContent

    };

    console.log(playerScore);
    highScores.push(playerScore);

    var scoresString = JSON.stringify(highScores);
    window.localStorage.setItem("high scores", scoresString);
    console.log(localStorage.getItem("high score"));

    // displayHighScores();
// }


// function displayHighScores() {

//     var savedHighScores = localStorage.getItem("high Scores");
//     if ( savedHighScores === null) {
//         return;
//     }
//     console.log(savedHighScores);
//     var storedHighScores = JSON.parse(savedHighScores);
//     for (var i = 0; i < storedHighScores.length; i++) {
//         var eachNewScore = document.createElement("p");
//         eachNewScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
//         listOfHighScores.appendChild(eachNewScore);
//         console.log(listOfHighScores);
//     }



//event listeners

startBtn.addEventListener('click', startGame)
answerA.addEventListener("click", answerAA)
answerB.addEventListener("click", answerBB)
answerC.addEventListener("click", answerCC)
answerD.addEventListener("click", answerDD)
submitInitBtn.addEventListener("click", saveScore)

