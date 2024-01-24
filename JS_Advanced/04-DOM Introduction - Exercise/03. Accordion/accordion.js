function toggle() {

    const MORE = 'More';
    const LESS = 'Less'

    let buttonSpan = document.querySelector('.button')
    let text = document.querySelector('#extra')

    buttonSpan.textContent = buttonSpan.textContent === MORE 
    ? LESS
    : MORE

    text.style.display = text.style.display === 'none' || text.style.display === ''
    ? 'block'
    : 'none'
}