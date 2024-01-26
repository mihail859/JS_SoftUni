function focused() {
    let elements = document.querySelectorAll('input[type="text"]');

    let arrElements = Array.from(elements);

    elements.forEach(el =>{
        el.addEventListener('focus', function (){
            el.parentNode.classList.add('focused');
        });
        el.addEventListener('blur', function (){
            el.parentNode.classList.remove('focused')
        })
    })

}