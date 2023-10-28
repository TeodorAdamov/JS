const { describe } = require("mocha");
const lottery = require("./Lottery");
const { expect } = require('chai');


describe('Tests', () => {
    describe('Buy Lottery Ticket Functionality', () => {
        //•	buyLotteryTicket (ticketPrice,ticketCount,buy)

        it('should validate input', () => {
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
            expect(() => lottery.buyLotteryTicket('a', 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket({}, 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, 'a', true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, {}, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(0, {}, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw("Invalid input!");
        })

        it('returns string if input is valid', () => {
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(`You bought 1 tickets for 1$.`)
        })
    })

    describe('Check Ticket Functionality', () => {
        //•	checkTicket (ticketNumbers,luckyNumbers)

        it('should validate input', () => {
            expect(() => lottery.checkTicket(1, [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket('a', [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], 1)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], 'a')).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], {})).to.throw('Invalid input!');
            expect(() => lottery.checkTicket({}, [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 1, 1, 1], [1, 1, 1, 1, 1, 1])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 1, 1, 1])).to.throw('Invalid input!');
        })

        it('compares the numbers from the ticket with the winning numbers', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
            expect(lottery.checkTicket([1, 2, 3, 7, 8, 9], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 7, 8], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');

        })
    })


    describe('Check SecondChance Functionality', () => {
        //•	secondChance (ticketID, secondChanceWinningIDs)

        it('should validate input', () => {
            expect(() => lottery.secondChance('a', 'a')).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, 1)).to.throw('Invalid input!');
            expect(() => lottery.secondChance([], {})).to.throw('Invalid input!');
        })


        it('checks if Ticket ID is included in the array', () => {
            expect(lottery.secondChance(1,[1,2,3,4,5,6])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(0,[1,2,3,4,5,6])).to.equal("Sorry, your ticket didn't win!");
        })
    })
})