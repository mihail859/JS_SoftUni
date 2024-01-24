function toggle() {

    const MORE = 'MORE';
    const LESS = 'LESS'

    let buttonSpan = document.querySelector('.button')
    let text = document.querySelector('#extra')

    buttonSpan.textContent = buttonSpan.textContent === MORE 
    ? LESS
    : MORE

    text.style.display = text.style.display === 'none' || text.style.display === ''
    ? 'block'
    : 'none'
}