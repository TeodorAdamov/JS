function print(start, end){
    let print = ''
    let sum = 0;
    for (let s = start; s <= end; s++){
        print += s + ' ';
        sum += s
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}