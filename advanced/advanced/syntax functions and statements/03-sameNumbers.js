function sameNumbers(num) {
    let bool;
    const arr = num.toString().split('').map(n => Number(n))
    arr.length === arr.filter(n => arr[0] === n).length ? bool = true : bool = false;
   
    console.log(bool);
    console.log(arr.reduce((acc, sum) => acc + sum));
    
}

sameNumbers(2222222)