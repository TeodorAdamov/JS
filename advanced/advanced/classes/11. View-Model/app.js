class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(selector);
        debugger
        Array.from(this.elements).forEach(el => {
            el.addEventListener('change', () => {
                this.value = el.value;
            })
        })
    }

    get value() {
        return this._value
    }

    set value(value) {
        this._value = value
        for (const element of this._elements) {
            element.value = value;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach(el => {
    el.addEventListener('click', () => console.log(textbox.value));
})
