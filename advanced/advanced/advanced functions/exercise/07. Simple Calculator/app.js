function calculator() {
    let num1;
    let num2;
    let result;


    const init = (selector1, selector2, resultSelector) => {
        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    const add = () => {
        result.value = Number(num1.value) + Number(num2.value);
    }

    const subtract = () => {
        result.value = Number(num1.value) - Number(num2.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




