function sortArrByCriteria(arr, criteria){
    const criteriaObj = {
        asc: (a, b) => a-b,
        desc: (a,b) => b-a 
    } 
    return arr.sort(criteriaObj[criteria])
}

console.log(sortArrByCriteria([14, 7, 17, 6, 8], 'asc'))
console.log(sortArrByCriteria([14, 7, 17, 6, 8], 'desc'))