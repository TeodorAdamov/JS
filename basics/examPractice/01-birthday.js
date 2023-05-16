function birthday(input){
    let rent = Number(input);
    let cake = rent * 0.2
    let drinks = cake * 0.55
    let animator = rent * 1 / 3;

    let total = rent + cake + drinks + animator;
    console.log(total);

}

birthday(["2250"])