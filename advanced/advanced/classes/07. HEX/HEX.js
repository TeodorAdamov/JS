class Hex {
    constructor(num) {
        this.num = num;
    }

    valueOf() {
        return this.num
    }

    toString() {
        return `0x${this.num.toString(16).toUpperCase()}`
    }

    plus(num) {
        return new Hex(this.num + num);
    }

    minus(num) {
        return new Hex(this.num - num);
    }

    parse(str) {
        return parseInt(str, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));

