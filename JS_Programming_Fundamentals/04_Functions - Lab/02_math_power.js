/*
*****
 ****
  ***
   **
    *
*/
function drawShape(n){
    let print;
    for (let i = n; i >=1; i--){
        if (i === n){
            console.log("*".repeat(n))
        }
        else{
            print = " ".repeat(n-i) + "*".repeat(i)
            console.log(print)
        }

    }
}
drawShape(5)