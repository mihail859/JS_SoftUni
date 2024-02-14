function ticketFunction(arrTickets, criteria){
    class Ticket{
        constructor(d, p, s){
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }

    let  arrCopy = [...arrTickets]
    arrCopy = arrCopy.map(x=> x.split('|'));
    arrCopy = arrCopy.map(([d, p,s]) => new Ticket(d, Number(p), s));

    arrCopy = arrCopy.sort((a, b)=> {
        return typeof a[criteria] === 'number'
        ? a[criteria] - b[criteria]
        : a[criteria].localeCompare(b[criteria])
    });

    return arrCopy;
}

console.log(ticketFunction(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))