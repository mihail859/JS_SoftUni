function outer(arr){
    let collection = [];
    function inner(){
        
        function add(str){
            collection.push(str)
        }
        function remove(str){
            collection = collection.filter(x => x !== str)
        }
        function print(){
            console.log(collection.join(","))
        }

        return {
            add,
            remove,
            print 
        }
    }

    let newProcessor = inner()
    arr.forEach(element => {
        let [command, value] = element.split(" ")
        newProcessor[command](value)
    });

   
}


const input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
const input2 = ['add pesho', 'add george', 'add peter', 'remove peter','print'];
outer(input)
outer(input2)