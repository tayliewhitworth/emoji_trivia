const question = document.querySelector('#question')
const emojis = document.querySelector('#emojis')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

console.log('working')

let questions = [
    {
        question: 'Can you guess the movie based on emojis?',
        emojis: '🧜‍♀️🦀🐟🧜‍♂️🤴',
        choice1: 'The Little Mermaid',
        choice2: 'Finding Nemo',
        choice3: 'Shark Tale',
        choice4: 'Jaws',
        answer: 1,
    },
    {
        question: 'Can you guess the movie based on emojis?',
        emojis: '🛳️🧊💏💘🎨🖌️🛶',
        choice1: 'Shipwrecked',
        choice2: 'Pirates of the Caribbean',
        choice3: 'The Titanic',
        choice4: 'Captain Phillips',
        answer: 3,
    },
    {
        question: 'Can you guess the movie based on emojis?',
        emojis: '🎮🍗🍴😵',
        choice1: 'Goonies',
        choice2: 'The Hunger Games',
        choice3: 'Twilight',
        choice4: 'Mission Impossible',
        answer: 2,
    },
    {
        question: 'Can you guess the movie based on emojis?',
        emojis: '🧙‍♂️🪄🧙⚡',
        choice1: 'Harry Potter',
        choice2: 'Star Wars',
        choice3: 'Lord of the Rings',
        choice4: 'Dr.Strange',
        answer: 1,
    },
    {
        question: 'Can you guess the movie based on emojis?',
        emojis: '🍫🍭🏭👦',
        choice1: 'Eat, Pray, Love',
        choice2: 'Ratatouille',
        choice3: 'Forrest Gump',
        choice4: 'Charlie and the Chocolate Factory',
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.textContent = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.textContent = currentQuestion.question

    emojis.textContent = currentQuestion.emojis

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.textContent = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log('clicked')
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestions()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.textContent = score
}

startGame()