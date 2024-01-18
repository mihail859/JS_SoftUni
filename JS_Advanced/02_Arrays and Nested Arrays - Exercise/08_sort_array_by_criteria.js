function sortByTwoCriteria(arr){
    return (arr.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))).join('\n')
}

console.log(sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
))