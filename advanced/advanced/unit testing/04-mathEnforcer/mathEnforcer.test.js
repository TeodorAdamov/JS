const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('Math Enforcer Tests', () => {

    describe('addfive tests', () => {
        it('addFive param is not a number', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined
        })

        it('addFive param is not a number', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined
        })

        it('addFive works with positive numbers', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        })

        it('addFive works with negative numbers', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })

        it('works with floating point numbers', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01)
        })
    })


    describe('subtractTen Tests', () => {
        it('subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined
        })

        it('subtractTen param is not a number', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        })

        it('subtractTen works with positive numbers', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        })

        it('subtractTen works with negative numbers', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        })

        it('works with floating point numbers', () => {
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01)
        })
    })


    describe('sum Tests', () => {
        it('sum param is not a number', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
        })

        it('works with positive numbers', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3)
        })

        it('works with floating point numbers', () => {
            expect(mathEnforcer.sum(1, 2.1)).to.be.closeTo(3.1, 0.01)
        })

        it('works with negative numbers and negative floating point numbers', () => {
            expect(mathEnforcer.sum(1, -1)).to.equal(0)
            expect(mathEnforcer.sum(-1.5,-1.5)).to.be.closeTo(-3, 0.01)
        })
    })
})