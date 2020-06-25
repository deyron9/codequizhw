const startButton = document.getElementById('start-btn")
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started') 
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {


}

function selectAnswer() {

}

const questions = [ {

    questions: 'What is the capital of Ohio'
    answers: [
        {text: 'Columbus', correct: true}
        {text:'Akron', correct: false}
    ]
}
]  