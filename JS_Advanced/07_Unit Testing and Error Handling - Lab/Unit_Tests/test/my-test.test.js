import { expect } from 'chai';

const { sum, product } = require("../utils/my_math")

describe('sum', ()=>{
    it('should return correct result with array of numbers', ()=>{
        // Arrange
        let array = [1, 2, 3];

        // Act
        let result = sum(array);

        // Assert
        expect(result).to.be.equal(6);
    });
    it('should return NaN if input is not an array', ()=>{

    });
    it('should calculate result with array of mixed types', ()=>{

    });
});

describe('product', ()=>{
    it('should return correct result', ()=>{

    });
})