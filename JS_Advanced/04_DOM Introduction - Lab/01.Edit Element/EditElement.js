function editElement(ref, match, replacer) {
    let string = ref.textContent;
    
    while (string.includes(match)){
        string = string.replace(match, replacer)
    }

    ref.textContent = string


}    