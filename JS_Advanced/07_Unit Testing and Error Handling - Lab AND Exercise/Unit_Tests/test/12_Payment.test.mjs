import PaymentPackage from "../12_task_from_classes/12_Payment_Package.mjs";
import { expect, assert } from 'chai';

describe('test the Class PaymentPackage', () => {
    describe('Tests for the name', () => { 
        it('constructor', ()=>{
            const instance = new PaymentPackage('Name', 100)
            assert.equal(instance._name, "Name", "1")
            assert.equal(instance._value, 100, "3")
            assert.equal(instance._VAT, 20, "4")
            assert.equal(instance._active, true, "5")

        });
        it('throws new Error of the Name is a number', ()=>{
            expect(()=> new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string')
        });
        it('throws new Error of the Name is arr', ()=>{
            expect(()=> new PaymentPackage(['a', 'b', 'c'], 123)).to.throw('Name must be a non-empty string')
        });
        it('throws new Error of the Name is an empty string', ()=>{
            expect(()=> new PaymentPackage('', 123)).to.throw('Name must be a non-empty string')
        });
        it('should not throw error', ()=>{
            expect(()=> new PaymentPackage('avc', 123)).not.to.throw('Name must be a non-empty string')
        });
        
    });
    describe('test for value', () => { 
        it('set value to null', ()=>{
            const instance = new PaymentPackage('Name', 100)
            assert.doesNotThrow(()=>{
                instance.value = 0
            })
        });
        it('throw new error if the value is string', ()=>{
            expect(()=> new PaymentPackage("123", "abc")).to.throw('Value must be a non-negative number')

        });
        it('throw new error if the value is arr', ()=>{
            expect(()=> new PaymentPackage("123", [1, 2, 3 ])).to.throw('Value must be a non-negative number')

        });
        it('throw new error if the value is negative number', ()=>{
            expect(()=> new PaymentPackage("123", -9)).to.throw('Value must be a non-negative number')

        });
        it('should not throw error', ()=>{
            expect(()=> new PaymentPackage('avc', 123)).not.to.throw('Value must be a non-negative number')
        });

    })
    describe('test for Vat', () => { 
        /*'VAT must be a non-negative number'*/
        it('throws error if the Vat is string', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.VAT = "abc").to.throw('VAT must be a non-negative number'))
        });
        it('throws error if the Vat is an arr', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.VAT = [5, 6, 8]).to.throw('VAT must be a non-negative number'))
        });
        it('throws error if the Vat is a negative number', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.VAT = -10).to.throw('VAT must be a non-negative number'))
        });
        it('not to throw error', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.VAT = 8).not.to.throw('VAT must be a non-negative number'))
        });
        
        
    })
    describe('test for the Active', () => { 
        it('throws error if the Active is string', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.active = "abc").to.throw('Active status must be a boolean'))
        });
        it('throws error if the Active is an arr', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.active = [5, 6, 8]).to.throw('Active status must be a boolean'))
        });
        it('throws error if the Active is a negative number', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.active = -10).to.throw('Active status must be a boolean'))
        });
        it('not to throw error', ()=>{
            let flag = new PaymentPackage("abc", 123)
            expect(()=> (flag.active = false).not.to.throw('Active status must be a boolean'))
        });
    })
    describe('test for toString method', () => { 
        it('if input is correct', ()=>{
            const instance = new PaymentPackage('abc', 123);
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(instance.toString()).to.equal(output.join("\n"))

        });
        it('if input is correct and vat is set to 30', ()=>{
            const instance = new PaymentPackage('abc', 123);
            instance.VAT = 30;
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(instance.toString()).to.equal(output.join("\n"))

        });
        it('if input is correct and active is set to false', ()=>{
            const instance = new PaymentPackage('abc', 123);
            instance.active = false;
            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(instance.toString()).to.equal(output.join("\n"))

        });
        it('if input is correct and active is set to false and vat to 30', ()=>{
            const instance = new PaymentPackage('abc', 123);
            instance.active = false;
            instance.VAT = 30;
            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(instance.toString()).to.equal(output.join("\n"))

        });

    })
})