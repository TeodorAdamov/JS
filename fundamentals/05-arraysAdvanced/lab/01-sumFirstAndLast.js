function sumFirstLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());

    console.log(first + last);
}