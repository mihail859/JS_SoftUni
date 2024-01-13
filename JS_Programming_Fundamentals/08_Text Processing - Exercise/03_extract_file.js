function extract(path){
    let pathArr = path.split('\\')
    let neededInfo = pathArr.pop().split(".")
    
    let fileName = neededInfo.slice(0,neededInfo.length - 1).join(".")
    
    let extension = neededInfo[neededInfo.length - 1]
    console.log(`File name: ${fileName}\nFile extension: ${extension}`)
}

extract('C:\\Internal\\training-internal\\Template.bak.pptx')
extract('C:\\Projects\\Data-Structures\\LinkedList.cs')