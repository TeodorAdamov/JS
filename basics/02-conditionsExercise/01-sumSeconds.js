function sumSeconds(input){

    // time input
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdtime = Number(input[2]);
    
    // total time calculated in minutes and seconds
    let totalTime = firstTime + secondTime + thirdtime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    

        if (seconds < 10 ){
            console.log(`${minutes}:0${seconds}`);
        } else {
            console.log(`${minutes}:${seconds}`);
        }
}

sumSeconds(["35","45","44"]);