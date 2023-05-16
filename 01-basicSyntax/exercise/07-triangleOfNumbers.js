function triangle(number){
    
    for (let rows = 1; rows <= number; rows++){
        let row = ''
        for (let cols = 1; cols <= rows; cols++){
            row += rows + ' ';
        }
        console.log(row);
    }
}