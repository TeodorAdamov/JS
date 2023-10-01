const { expect } = require('chai');
const isOddOrEven = require('./02-evenOrOdd');



describe('evenOdd Tests', function test() {
    it('runs with odd length strings', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });

    it('runs with even length strings', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    })

    it('returns undefined if type is not a string', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    })

    it('returns undefined if type is not a string', () => {
        expect(isOddOrEven({})).to.be.undefined;
    })

    it('is working correctly', () => {
        expect(isOddOrEven('abvvb')).to.equal('odd');
        expect(isOddOrEven('abvvbd')).to.equal('even');
        expect(isOddOrEven('abvvbed')).to.equal('odd');
    })
})

