const startButton = document.getElementById('start-btn')
const questionContainerelement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestion


startButton.addEventListener('click',startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0 
    questionContainerelement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){button.dataset.correct = answer.correct}
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer (){

}

const questions = [ 
    {
        question: 'What is capital of Ohio'
        answers: [ 
            {text: 'Columbus', correct: true}
            {text: 'Cleveland', correct: false}


        ]
    }
]