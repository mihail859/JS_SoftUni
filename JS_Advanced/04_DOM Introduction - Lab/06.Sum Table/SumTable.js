function sumTable() {
    let prices = document.getElementsByTagName('td')
    let arr = Array.from(prices)

    let totalSum = 0
    for (let i = 1; i < arr.length-1; i+=2){
        totalSum += Number (arr[i].textContent)
    }
    let elWithIdSum = document.getElementById("sum")
    elWithIdSum.textContent = totalSum
}