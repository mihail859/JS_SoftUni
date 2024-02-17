import {assert, expect} from 'chai'
import planYourTrip from '../exam-problem.mjs'


describe('tests from the object', ()=>{
    describe('tests for choosingDestination ', ()=>{
        it('should throw error if the year isnt 2024', ()=>{
            expect(()=>planYourTrip.choosingDestination('desc', 'autum', 2023)).to.throw("Invalid Year!")
        });
        it('should throw error if destination is different from "Ski Resort" ', ()=>{
            expect(()=>planYourTrip.choosingDestination('desc', 'autum', 2024)).to.throw("This destination is not what you are looking for.")
        });
        it('should throw error if destination is different from "Ski Resort" ', ()=>{
            expect(()=>planYourTrip.choosingDestination('Spa', 'Winter', 2024)).to.throw("This destination is not what you are looking for.")
        });
        it('should work with season winter', ()=>{
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024), 'Great choice! The Winter is the perfect time to visit the Ski Resort.')
        });
        it('if the season is Winter but destination isnt Ski Resort', ()=>{
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Spring', 2024), `Consider visiting during the Winter for the best experience at the Ski Resort.`)
        });
        it('if the season is Autumn ', ()=>{
            assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Autumn', 2024), `Consider visiting during the Winter for the best experience at the Ski Resort.`)
        })
    });
    describe('tests for exploreOptions (activities, activityIndex', ()=>{
        it('should throw error if the activities is not an array', ()=>{
            expect(()=> planYourTrip.exploreOptions('a, b', 202)).to.throw("Invalid Information!")
        });
        it('should throw error if the activityIndex is not a number', ()=>{
            expect(()=>planYourTrip.exploreOptions(['a', 'b'], 'p')).to.throw("Invalid Information!")
        });
        it('should throw error if the index > arr length', ()=>{
            expect(()=>planYourTrip.exploreOptions(['a', 'b'], 8)).to.throw("Invalid Information!")

        });
        it('should throw error if the index >= arr length', ()=>{
            expect(()=>planYourTrip.exploreOptions(['a', 'b'], 2)).to.throw("Invalid Information!")

        });
        it('should throw error if the index<0', ()=>{
            expect(()=>planYourTrip.exploreOptions(['a', 'b'], -8)).to.throw("Invalid Information!")

        });
        it('should throw error if the index is not integer', ()=>{
            expect(()=>planYourTrip.exploreOptions(['a', 'b'], -8.5)).to.throw("Invalid Information!")

        });
        it('should throw error if the index isundefined', ()=>{
            expect(()=>planYourTrip.exploreOptions(undefined, undefined)).to.throw("Invalid Information!")

        });
        it('should work properly', ()=>{
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1), 'Skiing, Winter Hiking')
        });
        it('should work properly', ()=>{
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0), 'Snowboarding, Winter Hiking')
        })
        it('should work properly', ()=>{
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2), 'Skiing, Snowboarding')
        })
    })
    describe('estimateExpenses ', ()=>{
        it('should throw error if the distanceInKilometers is undefined both params', ()=>{
            expect(()=>planYourTrip.estimateExpenses(undefined, undefined)).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers is undefined', ()=>{
            expect(()=>planYourTrip.estimateExpenses('er', undefined)).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers is []', ()=>{
            expect(()=>planYourTrip.estimateExpenses('er', [])).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers is 859', ()=>{
            expect(()=>planYourTrip.estimateExpenses(-89, 0)).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers is 859', ()=>{
            expect(()=>planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers is not a number', ()=>{
            expect(()=>planYourTrip.estimateExpenses('er', 4)).to.throw('Invalid Information!')
        });
        it('should throw error if the fuelCostPerLiter is not a number', ()=>{
            expect(()=>planYourTrip.estimateExpenses(4, 'o')).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers < 0', ()=>{
            expect(()=>planYourTrip.estimateExpenses(-4, 4)).to.throw('Invalid Information!')
        });
        it('should throw error if the fuelCostPerLiter < 0', ()=>{
            expect(()=>planYourTrip.estimateExpenses(4, -5)).to.throw('Invalid Information!')
        });
        it('should throw error if the distanceInKilometers = 0', ()=>{
            expect(()=>planYourTrip.estimateExpenses(0, 4)).to.throw('Invalid Information!')
        });
        it('should throw error if the fuelCostPerLiter = 0', ()=>{
            expect(()=>planYourTrip.estimateExpenses(4, 0)).to.throw('Invalid Information!')
        });
        it('should return message if totalCost<=500', ()=>{
            assert.equal(planYourTrip.estimateExpenses(50, 2), 'The trip is budget-friendly, estimated cost is $100.00.')
        });
        it('should return message if totalCost=500', ()=>{
            assert.equal(planYourTrip.estimateExpenses(50, 10), 'The trip is budget-friendly, estimated cost is $500.00.')
        });
        it('should return message if totalCost> 500', ()=>{
            assert.equal(planYourTrip.estimateExpenses(500, 4),'The estimated cost for the trip is $2000.00, plan accordingly.')
        });
        it('should return message if totalCost> 500 3', ()=>{
            assert.equal(planYourTrip.estimateExpenses(500, 2),'The estimated cost for the trip is $1000.00, plan accordingly.')
        });
        it('should return message if totalCost> 500 7', ()=>{
            assert.equal(planYourTrip.estimateExpenses(500, 3),'The estimated cost for the trip is $1500.00, plan accordingly.')
        });
        it('should return message if totalCost< 500 7 decimal', ()=>{
            assert.equal(planYourTrip.estimateExpenses(22.8, 1.25),'The trip is budget-friendly, estimated cost is $28.50.')
        });
        it('should return message if totalCost> 500 7 decimal', ()=>{
            assert.equal(planYourTrip.estimateExpenses(703.21, 1.25),'The estimated cost for the trip is $879.01, plan accordingly.')
        });

    })

    
})