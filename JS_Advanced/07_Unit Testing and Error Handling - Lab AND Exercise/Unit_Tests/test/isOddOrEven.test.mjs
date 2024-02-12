import { expect } from "chai";
import isOddOrEven from "../02_task/isOddOrEven.mjs";

describe('isOddOrEven', ()=>{
    it('isString', ()=>{
        expect(isOddOrEven(3)).to.undefined
    });
    it('isEven', ()=>{
        expect(isOddOrEven('aa')).to.equal('even')
    })
    it('isOdd', ()=>{
        expect(isOddOrEven('a')).to.equal('odd')
    })
});
