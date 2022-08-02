const guess = document.getElementById('question-1')
let post = document.getElementById('post')
const submit = document.getElementById('sumbit-1')
let emojis = document.getElementById('emojis')
const reset = document.getElementById('reset')

submit.addEventListener('click', function() {
   if (guess.value.toLowerCase() === 'little mermaid') {
        emojis.innerHTML = '<p>Good Job!</p>'
        post.innerHTML = ''
    } else {
        post.innerHTML = '<p>Try Again!</p>'
    } 
    guess.value = ''
})

submit.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        console.log('enter')
        event.preventDefault()
        guess.submit()
    }
})


reset.addEventListener('click', function() {
    location.reload()
})
