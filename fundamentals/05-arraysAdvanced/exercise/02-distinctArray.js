function distinctArray(numbers) {

    let newArr = numbers.filter((el, index) => numbers.indexOf(el) === index);

    console.log(newArr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])