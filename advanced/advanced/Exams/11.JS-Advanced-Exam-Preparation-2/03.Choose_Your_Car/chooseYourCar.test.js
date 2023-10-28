const { expect } = require("chai");
const { describe } = require("mocha");
const chooseYourCar = require("./chooseYourCar");


describe("Choose Your Car Tests", () => {

    describe("Choosing Type Functionality", () => {
        //•	choosingType (type, color, year) 
        it('throws error if year is invalid ', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', 2023)).to.throw('Invalid Year!');
        });

        it('throws error if type is not Sedan ', () => {
            expect(() => chooseYourCar.choosingType('Coupe', 'Black', 2000)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('Jeep', 'Black', 2000)).to.throw('This type of car is not what you are looking for.');
        });

        it('can be picked up', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2010)).to.equal('This Red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2022)).to.equal('This Red Sedan meets the requirements, that you have.');
        })

        it('cannot be picked up', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2009)).to.equal('This Sedan is too old for you, especially with that Red color.');
        })
    });


    describe('Brand Name Functionality', () => {
        //•	brandName (brands, brandIndex)
        it('validates input', () => {
            expect(() => chooseYourCar.brandName(1, 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName('a', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['a'], 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['a'], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName([], 'a')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName([], {})).to.throw('Invalid Information!');
        })

        it('must remove element from array at index', () => {
            const arr = ['BMW', 'TOYOTA', 'SKODA'];
            expect(chooseYourCar.brandName(arr, 0)).to.equal('TOYOTA, SKODA')
        })
    })

    describe('Car Fuel Consumption Functionality', () => {
        //•	CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)
        it('validates input', () => {
            expect(() => chooseYourCar.carFuelConsumption('a', 'a')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption({}, {})).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw('Invalid Information!');
        })

        it('tests the car to find out what the consumption is ', () => {
            expect(chooseYourCar.carFuelConsumption(100,10)).to.equal('The car burns too much fuel - 10.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100,7.01)).to.equal('The car burns too much fuel - 7.01 liters!');
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100,6)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
        })
    })

});
