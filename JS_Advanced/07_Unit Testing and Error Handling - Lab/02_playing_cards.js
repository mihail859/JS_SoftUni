function cardFactoryFunction(cardFace, cardSuit){
    const cardFacesArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'].map(el => el.toString())
    const cardsSuitsObj = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    const isCardFaceValid = cardFacesArr.includes(cardFace)
    const isCardsSuitValid = cardsSuitsObj.hasOwnProperty(cardSuit)

    if (isCardFaceValid && isCardsSuitValid){
        let symbol = cardsSuitsObj[cardSuit]
        return {
            cardFace,
            symbol,
            toString(){
                return `${this.cardFace}${this.symbol}`;
            }
        }
    }else{
        throw Error ('Error');
    }
};

let card1 = cardFactoryFunction('10', 'H')
card1.toString()

let card2 = cardFactoryFunction('9', 'H');
card2.toString();