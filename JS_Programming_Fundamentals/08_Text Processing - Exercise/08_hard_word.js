function completeTheText(arrInput){
    let text = arrInput[0]
    let words = arrInput[1].slice(0).sort((a, b) => b.length - a.length)

    for (let w of words){
        let hidden = '_'.repeat(w.length)
        while (text.includes(hidden)){
            text = text.replace(hidden, w)
        }
    }
    console.log(text)
}

completeTheText(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)