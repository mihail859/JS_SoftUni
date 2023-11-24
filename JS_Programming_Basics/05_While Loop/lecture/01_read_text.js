function read(input){
    let index = 0

    while (true){
        let name = input[index]
        if (name === "Stop"){
            break
        }
        else{
            console.log(name)
            index++;
        }
    }
}

read(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
