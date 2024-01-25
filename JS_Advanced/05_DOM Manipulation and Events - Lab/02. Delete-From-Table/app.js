function deleteByEmail() {
    const result = document.getElementById('result');
    const inputEmail = document.getElementsByName("email")[0].value
    const rows = document.querySelectorAll('tbody tr');
    const rowsAsArray = Array.from(rows)

    let isRemoved  = false

    rowsAsArray.forEach(element => {
        let tdNode = element.querySelectorAll('td')[1].textContent;
        
        if (inputEmail === tdNode){
            element.remove()
            isRemoved = true
            inputEmail.value = ""
        }

    });
    result.textContent = isRemoved === false ? "Not found." : 'Deleted.'


}