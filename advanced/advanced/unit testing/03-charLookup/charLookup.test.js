const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('CharLookup Tests', function chars() {

    it('returns undefined if first param is not a string', () => {
        expect(lookupChar(1, 1)).to.be.undefined
    })

    it('returns undefined if second param is not a number', () => {
        expect(lookupChar('a', 'a')).to.be.undefined
    })

    it('returns undefined if first param is not a string', () => {
        expect(lookupChar({}, 5)).to.be.undefined
    })

    it('returns undefined if second param is not a number', () => {
        expect(lookupChar('a', {})).to.be.undefined
    })

    it('returns undefined if first param is not a string', () => {
        expect(lookupChar('a', 3.3)).to.be.undefined
    })



    it('returns Incorrect index', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index')
    })

    it('returns Incorrect index', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index')
    })

    it('works as intended', () => {
        expect(lookupChar('a', 0)).to.equal('a')
    })

    it('overload tests', () => {
        expect(lookupChar('abcdefg', 4)).to.equal('e')
        expect(lookupChar('azqwertyasd sad', 11)).to.equal(' ')
        expect(lookupChar('azxcxzcx', 7)).to.equal('x')
    })
})