function calculator() {
    
    const htmlElements = {
        'element1': "",
        'element2': "",
        'result': ""
    };

    function init(selector1, selector2, resultSelector){
        htmlElements.element1 = document.querySelector(selector1)
        htmlElements.element2 = document.querySelector(selector2)
        htmlElements.result = document.querySelector(resultSelector)
    }
    function add(){
        htmlElements.result.value = Number(htmlElements.element1.value) + Number(htmlElements.element2.value)
    }
    function subtract (){
        htmlElements.result.value = Number(htmlElements.element1.value) - Number(htmlElements.element2.value)
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




