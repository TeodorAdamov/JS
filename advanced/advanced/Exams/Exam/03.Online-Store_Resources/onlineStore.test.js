const { expect } = require("chai");
const { describe } = require("mocha");
const onlineStore = require("./onlineStore");

describe("Online Store Tests", function () {
    describe('Product Available Functionality', () => {
        //isProductAvailable(product, stockQuantity)

        it('validates input', () => {
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable({}, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable('a', 'a')).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable('a', {})).to.throw('Invalid input.');
        });


        it('checks Stock Quantity', () => {
            expect(onlineStore.isProductAvailable('Cake', -1)).to.equal('Sorry, Cake is currently out of stock.')
            expect(onlineStore.isProductAvailable('Cake', 0)).to.equal('Sorry, Cake is currently out of stock.')
            expect(onlineStore.isProductAvailable('Cake', 1)).to.equal('Great! Cake is available for purchase.')
        })
    });


    describe('Can Afford Product Functionality', () => {
        //canAffordProduct(productPrice, accountBalance)

        it('validates input', () => {
            expect(() => onlineStore.canAffordProduct({}, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct('a', 'a')).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(1, {})).to.throw('Invalid input.');
        });


        it('checks if u can afford the product', () => {
            expect(onlineStore.canAffordProduct(1, 0)).to.equal("You don't have sufficient funds to buy this product.")
            expect(onlineStore.canAffordProduct(1, 1)).to.equal('Product purchased. Your remaining balance is $0.')
            expect(onlineStore.canAffordProduct(10, 20)).to.equal('Product purchased. Your remaining balance is $10.')
        })
    })

    describe('Recommended Products Functionality', () => {
        it('validates input', () => {
            expect(() => onlineStore.getRecommendedProducts(1, 'a')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts('a', 'a')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([], 1)).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([], {})).to.throw('Invalid input.');
        })

        it('checks if product exists in products array', () => {
            const list = [
                {
                    name: 'Camera',
                    category: 'Photography'
                },
                {
                    name: 'Phone',
                    category: 'Photography'
                },
                {
                    name: 'Bread',
                    category: 'Food'
                }
            ]
            expect(onlineStore.getRecommendedProducts(list, 'Photography')).to.equal(`Recommended products in the Photography category: Camera, Phone`);
            expect(onlineStore.getRecommendedProducts(list, 'Nature')).to.equal(`Sorry, we currently have no recommended products in the Nature category.`);
        })
    })

});
