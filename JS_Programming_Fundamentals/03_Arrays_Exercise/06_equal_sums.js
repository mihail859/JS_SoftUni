function solve(arr){
    let position = 'no'
    arr.forEach((e, i, arrs) => {
      let newArr = arrs.slice(0)
      let leftPart = newArr.splice(0, i+1)
      newArr.shift()
      sumArrays(leftPart) === sumArrays(newArr) ? position = i+1 : 'no';
    })
    arr.length <= 1 ? position = 0 : null 
    console.log(position)
  
    function sumArrays(a){
        return a.reduce((acc, e) => acc + e, 0)
    }
  }