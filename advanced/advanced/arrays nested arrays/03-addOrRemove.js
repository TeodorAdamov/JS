function addOrRemove(arr) {

    let num = 1;
    const newArr = [];

    for (const command of arr) {
        command === 'add' ? newArr.push(num) : newArr.pop()
        num++
    }

    if (newArr.length > 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

addOrRemove([
    'add',
    'add',
    'add',
    'add']
)