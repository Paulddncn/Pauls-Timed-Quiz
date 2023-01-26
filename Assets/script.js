// Array of questions and answers
const questions = [
    {
        questions: "Commonly used data types include",
        options: ["buttons", "zippers", "pockets", 'strings'],
        answer: 'strings',
    },

    {
        questions: "What does HTML stand for?",
        options: ["Hit The Mouse Last", "Hyper Type Markup Language", "Houses Tell Me Least", 'Hyper Text Markup Language'],
        answer: 'Hyper Text Markup Language',
    },

    {
        questions: "Who invented the first computer?",
        options: ["Charles Babbage", "Steve Jobs", "Alan Turing", 'Bill Gates'],
        answer: 'Charles Babbage',
    },
    {
        questions: "Who created Javascript? ",
        options: ["Mitchell Baker", "Elon Musk", "Brendan Eich", 'Guido van Rossum'],
        answer: 'Brendan Eich',
    },
    {
        questions: "Which element is used to connect javascript to HTML?",
        options: ["<link>", "<script>", "<select>", '<section>'],
        answer: '<script>',
    },
]

//add all query selectors
var introSection = document.querySelector('#controls')
var startControl = document.querySelector('.start-control')
var questionSection = document.querySelector('.question-forum')
var startButton = document.querySelector('#start-btn')
var answerBtn = document.querySelector(".btn-grid")
var endQuiz = document.querySelector('#end-quiz')
var aBtn = document.querySelector('#A')
var bBtn = document.querySelector('#B')
var cBtn = document.querySelector('#C')
var dBtn = document.querySelector('#D')
var initialInput = document.querySelector('#init')
var submitBtn = document.querySelector('#submit')
var highScores = document.querySelector('.highscores')
var userScore = document.querySelector('#user-score')
var finalScore = document.querySelector('#finalscore')
var goBack = document.querySelector('#go-back')
var clearHighscore = document.querySelector('#clear-highscore')
var timeEl = document.querySelector('#timer')
var question = document.querySelector('#question')
var timerInterval
var score
var timerCount = 60;
var index = [0]

//Create a start button to start quiz
startButton.addEventListener("click", startQuiz)
function startQuiz() {
    introSection.classList.add('hide')
    startControl.classList.add('hide')
    questionSection.classList.remove('hide')
    runQuestions()
    //set interval function to add timer to quiz
     timerInterval = setInterval(function () {
        timerCount--;
        timeEl.textContent = timerCount + " seconds left till next question";
        if (timerCount <= 0) {
            // Stops execution of action at set interval
            endGame()
        }
    }, 1000)
}
//var secondsLeft = document.querySelector()
//function to run and populate next set of questions and answers
function runQuestions() {
    question.textContent = questions[index].questions
    aBtn.textContent = questions[index].options[0]
    bBtn.textContent = questions[index].options[1]
    cBtn.textContent = questions[index].options[2]
    dBtn.textContent = questions[index].options[3]
}
answerBtn.addEventListener("click", function (event) {

    var chosen = event.target.textContent
    if (chosen == questions[index].answer) {
        showNext();
    }
    else {
        timerCount = timerCount - 2
        showNext()
    }
})

function showNext() {
    if (index >= questions.length - 1) {
        endGame();
        return
    }

    else {
        index++
        runQuestions();

    }

}
// function to log score and clear set interval

function endGame() {
    questionSection.classList.add('hide')
    endQuiz.classList.remove('hide')
    sendMessage()
    score = timerCount;
    console.log(score)
    clearInterval(timerInterval);
    //hide question after last question or time is reached
}
function sendMessage() {
   timeEl.textContent = "End of game!"

   // submitButton.addEventListener('click', function () {
   //     console.log(initialInput);
   //     finalScore.textContent = `Initials: ${initials} Score: ${score}`;
   // })
}

submitBtn.addEventListener('click', function(){
    var userInitials = initialInput.value
    console.log(userInitials)
    //grab time left as score
    //console log the score
    ////store the data into local storage
})

function renderLastGrade() {
    localStorage.setItem("score",JSON.stringify(score));
    localStorage.setItem("userInitials",JSON.stringify(userInitials));
    
    var storedInitials = JSON.parse.localStorage.getItem('highscores')
    for (let index = 0; index < storedInitials.length; index++) {
        let element = storedInitials[index];
        console.log(element);
    
        var li = document.createElement('li')
        li.textContent = `userInitials: ${element.userInitials} Score: ${element.score}`
        highScores.appendChild(li); 
}
}
    


//function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  //var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));


