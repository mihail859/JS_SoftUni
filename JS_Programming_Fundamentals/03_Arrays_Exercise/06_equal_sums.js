/*function solve(arr){
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
  }*/

function arraysDemo(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrayLength = arr.length;

    for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
        for (let i = 0; i < arrayLength; i++) {

            if (i !== currentIndex) {
                let num = Number(arr[i]);
                if (i < currentIndex) {
                    leftSum += num;
                } else if (i > currentIndex) {
                    rightSum += num;
                }
            }
            if (currentIndex === 0) {
                leftSum = 0;
            } else if (currentIndex === arrayLength - 1) {
                rightSum = 0;
            }
        }

        if (leftSum === rightSum) {
            console.log(currentIndex);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
arraysDemo([1, 2, 3, 3]);