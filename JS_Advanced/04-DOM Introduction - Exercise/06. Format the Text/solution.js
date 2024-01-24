function solve() {
  const textAreaText = document.getElementById('input')
  const outputArea = document.getElementById('output')
  const sentences = textAreaText.value.split('.').filter(el=> el !== "").map(el => el + '.')
  

  let paragraphsCount = Math.ceil(sentences.length / 3)
  
  let result = '';
  for (let i = 0; i < paragraphsCount; i++){
    let paragraphText = sentences.splice(0, 3)

     outputArea.innerHTML += `<p>${paragraphText}</p>`
  }
  
}