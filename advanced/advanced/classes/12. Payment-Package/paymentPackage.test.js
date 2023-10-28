const PaymentPackage = require("./paymentPackage");
const { expect } = require('chai');



describe('Payment Package Testing', () => {
    describe('testing with incorrect inputs', () => {
        it('should throw an error for invalid name', () => {
            expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({}, 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(1, 1)).to.throw('Name must be a non-empty string');
        })

        it('should throw an error for invalid value', () => {
            expect(() => new PaymentPackage('a', {})).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('a', 'a')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('a', '1')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('a', 0)).not.to.throw('Value must be a non-negative number');

        })
        it('should throw an error for invalid VAT', () => {
            const newPackage = new PaymentPackage('HR Services', 1);
            expect(() => newPackage.VAT = {}).to.throw('VAT must be a non-negative number')
            expect(() => newPackage.VAT = -1).to.throw('VAT must be a non-negative number')
            expect(() => newPackage.VAT = 'a').to.throw('VAT must be a non-negative number')
        })

        it('should throw an error if active property is not a boolean', () => {
            const newPackage = new PaymentPackage('HR Services', 1);
            expect(() => newPackage.active = 1).to.throw('Active status must be a boolean')
            expect(() => newPackage.active = 'a').to.throw('Active status must be a boolean')
            expect(() => newPackage.active = {}).to.throw('Active status must be a boolean')
            
        })

        it('should set and get active status correctly', () => {
            const package = new PaymentPackage('Test Package', 100);
            expect(package.active).to.be.true;
            package.active = false;
            expect(package.active).to.be.false;
        });
    })
    describe('testing toString functionality', () => {
        it('works correct with active = true and false', () => {
            const newPackage = new PaymentPackage('Teo', 5);
            expect(newPackage.toString()).to.equal('Package: Teo\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6');
            newPackage.active = false;
            expect(newPackage.toString()).to.equal('Package: Teo (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6');
        });
    });
})