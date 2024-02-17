import {assert, expect} from 'chai'
import planYourTrip from '../exam-problem.mjs'



describe('planYourTrip', () => {
    describe('choosingDestination', () => {
      it('should throw error if year is undefined', () => {
      expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', undefined)).to.throw('Invalid Year!');
    });
      it('should throw error if the year isn not  2024', () => {
        expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
      });
  
      it('should throw error if destination is different from "Ski Resort"', () => {
        expect(() => planYourTrip.choosingDestination('peak', 'Summer', 2024)).to.throw('This destination is not what you are looking for.');
      });
  
      it('should return message for Ski Resort and Winter', () => {
        assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024), 'Great choice! The Winter is the perfect time to visit the Ski Resort.');
      });
  
      it('should return message for Ski Resort and other seasons', () => {
        assert.equal(planYourTrip.choosingDestination('Ski Resort', 'Spring', 2024), 'Consider visiting during the Winter for the best experience at the Ski Resort.');
      });
    });
  
    describe('exploreOptions', () => {
      it('should throw error if first  param is not arr', () => {
        expect(() => planYourTrip.exploreOptions('Skiing', 1)).to.throw('Invalid Information!');
      });
      it('should throw error if activities is undefined', () => {
      expect(() => planYourTrip.exploreOptions(undefined, 1)).to.throw('Invalid Information!');
    });
  
      it('should throw error if activityIndex is not a number', () => {
        expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], '1')).to.throw('Invalid Information!');
      });
  
      it('should throw error if activityIndex is outside the limits of the array', () => {
        expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 5)).to.throw('Invalid Information!');
      });
  
      it('should throw error if activityIndex is not an integer number', () => {
        expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding'], 1.5)).to.throw('Invalid Information!');
      });
  
      it('should return the correct result', () => {
        assert.equal(planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 1), 'Skiing, Winter Hiking');
      });
      it('should return the correct result', () => {
        assert.equal(planYourTrip.exploreOptions(['Skiing', 'Winter Hiking'], 1), 'Skiing');
      });
    });
  
    describe('estimateExpenses', () => {
      it('should throw error if distanceInKilometers is not a number', () => {
        expect(() => planYourTrip.estimateExpenses('ertyui', 5)).to.throw('Invalid Information!');
      });
  
      it('should throw error if fuelCostPerLiter is not a number', () => {
        expect(() => planYourTrip.estimateExpenses(100, 'xyz')).to.throw('Invalid Information!');
      });
  
      it('should throw error if distanceInKilometers is negative or zero', () => {
        expect(() => planYourTrip.estimateExpenses(-100, 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw('Invalid Information!');
      });
      it('should throw error if distanceInKilometers is undefined', () => {
      expect(() => planYourTrip.estimateExpenses(undefined, 5)).to.throw('Invalid Information!');
    });

    it('should throw error if fuelCostPerLiter is undefined', () => {
      expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw('Invalid Information!');
    });
  
      it('should throw error if fuelCostPerLiter is negative or zero', () => {
        expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw('Invalid Information!');
      });
  
      it('should message if totalCost <= 500', () => {
        assert.equal(planYourTrip.estimateExpenses(50, 2), 'The trip is budget-friendly, estimated cost is $100.00.');
      });
  
      it('should return plan accordingly message if totalCost > 500', () => {
        assert.equal(planYourTrip.estimateExpenses(500, 4), 'The estimated cost for the trip is $2000.00, plan accordingly.');
      });
      it('should return message if totalCost< 500 7 decimal', ()=>{
        assert.equal(planYourTrip.estimateExpenses(22.8, 1.25),'The trip is budget-friendly, estimated cost is $28.50.')
    });
    it('should return message if totalCost> 500 7 decimal', ()=>{
        assert.equal(planYourTrip.estimateExpenses(703.21, 1.25),'The estimated cost for the trip is $879.01, plan accordingly.')
    });
    });
  });