import { assert, expect } from "chai";
import  mathEnforcer  from "../04_task/04_math_enforcer.mjs";

describe('mathEnforcer', ()=>{
    describe('addFive', ()=>{
        it('parameter is Not a number - returns undefined', ()=>{
            assert.equal(mathEnforcer.addFive('NaN'), undefined)
        });
        it('if no parameter - returns undefined', ()=>{
            assert.equal(mathEnforcer.addFive(), undefined)
        });
        it('works with positive integer numbers', ()=>{
            assert.equal(mathEnforcer.addFive(5), 10)
        });
        it('works with positive floating point numbers', ()=>{
            assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.01)
        });
        it('works with negative int numbers', ()=>{
            assert.equal(mathEnforcer.addFive(-8), -3)
        });
        it('works with negative floating point numbers', ()=>{
            assert.closeTo(mathEnforcer.addFive(-0.23), 4.77, 0.01)
        })
    });

    describe('subtractTen', ()=>{
        it('param is not a number', ()=>{
            assert.equal(mathEnforcer.subtractTen('test'), undefined)
        });
        it('if no parameter', ()=>{
            assert.equal(mathEnforcer.subtractTen(), undefined)
        });
        it('works with positive integer numbers', ()=>{
            assert.equal(mathEnforcer.subtractTen(5), -5)
        });
        it('works with positive floating point numbers', ()=>{
            assert.closeTo(mathEnforcer.subtractTen(2.5), -7.5, 0.01)
        });
        it('works with negative int numbers', ()=>{
            assert.equal(mathEnforcer.subtractTen(-8), -18)
        });
        it('works with negative floating point numbers', ()=>{
            assert.closeTo(mathEnforcer.subtractTen(-0.23), -10.23, 0.01)
        })
    });

    describe('sum', ()=>{
        it('if first param is not a  number', ()=>{
            assert.equal(mathEnforcer.sum('e', 7), undefined)
        });
        it('if second param is not a number', ()=>{
            assert.equal(mathEnforcer.sum(7, 'r'), undefined)
        });
        it('if both are not numbers', ()=>{
            assert.equal(mathEnforcer.sum('f', 't', undefined))
        });
        it('if no params are passed to the function', ()=>{
            assert.equal(mathEnforcer.sum(), undefined)
        });
        it('works with two positive numbers', ()=>{
            assert.equal(mathEnforcer.sum(5, 4), 9)
        });
        it('works with two negative numbers', ()=>{
            assert.equal(mathEnforcer.sum(-8, -9), -17)
        });
        it('works with two floating point negative numbers', ()=>{
            assert.closeTo(mathEnforcer.sum(-0.03, -2.58), -2.61, 0.01)
        });
        it('works with positive and negative floating numbers', ()=>{
            assert.closeTo(mathEnforcer.sum(2.35, 5.69), 8.04, 0.01)
        });
        
    });
})