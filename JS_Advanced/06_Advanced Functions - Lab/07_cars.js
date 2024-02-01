function outer(arr){
    const carObj = {}

    function inner(){
        function create(name, inherit, parentName){
            const tempObj = {}
            carObj[name] = tempObj
            if (inherit){
                Object.setPrototypeOf(tempObj, carObj[parentName])
            }
        }

        function set (name, key, value){
            carObj[name][key] = value
        }

        function print(name) {
            const obj = carObj[name];
            const props = getAllProperties(obj);
            console.log(props
                .map(e => `${e[0]}:${e[1]}`)
                .join(',')
            );
        }

        function getAllProperties(obj) {
            let props = Object.entries(obj)
            getParentProps(obj);
            return props;

            function getParentProps(obj) {
                const prototype = Object.getPrototypeOf(obj);
                if (Object.getPrototypeOf(prototype)) {
                    let parentProps = Object.entries(prototype);
                    props = props.concat(parentProps);
                    getParentProps(prototype);
                }
            }
        } 
        return {
            create,
            set,
            print
        }

        
    }
    let carsProcessor = inner();

    arr.forEach(element => {
        let tokens = element.split(' ');
        carsProcessor[tokens.splice(0, 1)](...tokens);
    });

}


const inputArr = ['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'];

outer(inputArr)