function solve() {
  const PASCAL_CASE = 'Pascal Case'
  const CAMEL_CASE = 'Camel Case'

  let textToModify = document.getElementById('text').value.toLowerCase();
  let typeCase = document.getElementById('naming-convention').value;

  if (typeCase !== PASCAL_CASE && typeCase !== CAMEL_CASE) {
      document.getElementById('result').textContent = 'Error!'

      return
  }
  let toArr = textToModify.split(" ")
  let result = typeCase === PASCAL_CASE ? "": toArr[0]
  let idx = typeCase === PASCAL_CASE ? 0 : 1

  for (let i = idx; i < toArr.length; i++){
    let word = toArr[i][0].toUpperCase() + toArr[i].slice(1, )
    result += word
  }
  document.getElementById('result').textContent = result
}