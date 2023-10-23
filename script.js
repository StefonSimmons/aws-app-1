document.querySelector('button').addEventListener('click', (e) => {
    document.querySelector('.my-space').classList.toggle('highlight')
    e.currentTarget.textContent = e.currentTarget.textContent === 'reset' ? 'Click me' : 'reset'
})
