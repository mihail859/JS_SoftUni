function encodeAndDecodeMessages() {
    const textAreaMessage = document.querySelector('textarea:first-of-type');
    const textAreaLastReceived = document.querySelector('#main>div:last-of-type>textarea');
    const encodeBtn = document.querySelector('button:first-of-type');
    const decodeBtn = document.querySelector('#main>div:last-of-type>button')
    
    encodeBtn.addEventListener('click', encodeFunction);
    decodeBtn.addEventListener('click', decodeFunction)

    function encodeFunction(){
        let allText = [...textAreaMessage.value]

        allText = allText.map((el ,i, self) => {
             return  String.fromCharCode(el.charCodeAt(0) + 1) 
        });
        
        let encodedMessage = allText.join("");
        textAreaLastReceived.textContent = encodedMessage
        textAreaMessage.value = ""

    }

    function decodeFunction(){
        let textToDecode =  [...textAreaLastReceived.textContent]
        textToDecode = textToDecode.map(el => String.fromCharCode(el.charCodeAt(0) - 1));

        let decodedMessage = textToDecode.join("");
        textAreaLastReceived.textContent = decodedMessage
    }
}