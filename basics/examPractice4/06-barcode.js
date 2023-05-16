function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];
    let print = ''
    
    for (let first = start[0]; first <= end[0]; first++){
        for (let second = start[1]; second<= end[1]; second++){
            for (let third = start[2]; third <= end [2]; third++){
                for (let fourth = start[3]; fourth <= end[3]; fourth++){
                    if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0 && fourth % 2 !== 0){
                        print += first + '' + second + third + fourth + ' '
                    }
                }
            }
        }
    }
    console.log(print);
          

}

barcodeGenerator(["2345", "6789"])
