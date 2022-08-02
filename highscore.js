const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map(score => {
    return `<li class='high-score' style='list-style: none; color: white; font-size: 2rem; margin-bottom: .5rem; margin-right: 1rem'>
                ${score.name} - ${score.score}
            </li>`
}).join('')