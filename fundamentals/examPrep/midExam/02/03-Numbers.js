function numbers(nums) {
    let myNumArr = nums.split(' ').map(Number);
    let newArr = [];
    let averageValue = 0;

    for (let num of myNumArr) {
        averageValue += num;
    }
    averageValue = averageValue / myNumArr.length;

    for (let el of myNumArr) {
        if (el > averageValue) {
            newArr.push(el)

        }
    }
    if(newArr[0] === undefined) {
        console.log('No');
        return;
    }
    newArr.sort((a, b) => b - a);
    let result = newArr.splice(0, 5);
    console.log(result.join(' '));
}

numbers('1')