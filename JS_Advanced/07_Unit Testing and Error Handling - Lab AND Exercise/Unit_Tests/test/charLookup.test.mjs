import { assert } from "chai";
import lookupChar from "../03_task/charLookup.mjs";

describe('lookupChar function', ()=>{
    it('Should return undefined if first parameter is not string', ()=>{
        assert.equal(lookupChar(1, 1), undefined)
    });
    it ('Should return undefined if second parameter is not an integer', ()=>{
        assert.equal(lookupChar('test', 1.25), undefined)
    });
    it('Should return undefined if both parameters are not valid', ()=>{
        assert.equal(lookupChar('string', 'string', undefined))
    });
    it('Should return Incorrect index if index < 0', ()=>{
        assert.equal(lookupChar('test', -5), "Incorrect index")
    });
    it('Should return Incorrect index if idx >= param1.length', ()=>{
        assert.equal(lookupChar('test', 10), "Incorrect index")
    });
    it("should return the letter of given index", ()=>{
        assert.equal(lookupChar('test', 0), 't')
    });
    it("should return the letter of given index 2", ()=>{
        assert.equal(lookupChar('test', 3), 't')
    });
    it("should return the letter of given index", ()=>{
        assert.equal(lookupChar('stop', 0), 's')
    });
    it("should return the letter of given index", ()=>{
        assert.equal(lookupChar('Pesho', 1), 'e')
    });

})