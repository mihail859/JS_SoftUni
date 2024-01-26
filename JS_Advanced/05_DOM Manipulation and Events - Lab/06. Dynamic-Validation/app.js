function validate() {
    const regExp = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    const inputEmail = document.getElementById('email');
    
    inputEmail.addEventListener('change', onChane);
    function onChane(ev){
        ev.target.classList.remove('error');
        if(!regExp.test(ev.target.value)){
            ev.target.classList.add('error');
        }
    }
}