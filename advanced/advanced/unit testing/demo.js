const { expect } = require("chai");

function sum(a, b) {
    return a + b;
}


describe('test', function () {

    it('works', function () {
        expect(sum(3,5)).to.equal(8)
    })
})