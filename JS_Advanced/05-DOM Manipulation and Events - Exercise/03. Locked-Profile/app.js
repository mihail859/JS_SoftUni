function lockedProfile() {
    const buttonsNode = document.querySelectorAll('div button');
    const buttonsArr = Array.from(buttonsNode)
    buttonsArr.forEach(button => {
        button.addEventListener('click', showInformation)
    });

    function showInformation(event) {
        const SHOW_MORE = 'Show more'
        const HIDE_IT = 'Hide it'
        const DISPLAY_BLOCK = 'block'
        const DISPLAY_NONE = 'none'

        const parent = event.target.parentElement;

        let radioButtonUnlock = parent.querySelector('input[value="unlock"]')

        if (radioButtonUnlock.checked) {
            let hiddenDiv = parent.querySelector('div')
            hiddenDiv.style.display === DISPLAY_BLOCK ? hiddenDiv.style.display = DISPLAY_NONE : hiddenDiv.style.display = DISPLAY_BLOCK
            event.target.textContent === SHOW_MORE ?  event.target.textContent = HIDE_IT : event.target.textContent = SHOW_MORE
        }
    };
}