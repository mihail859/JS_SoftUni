function seePiecesBetween(arr, start, end){
    let startIdx = arr.indexOf(start);
    let endIdx = arr.indexOf(end)

    let between = arr.slice(startIdx, endIdx +1 )
    return between
}

seePiecesBetween(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)