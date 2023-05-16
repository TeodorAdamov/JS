function clock(){
    for (let hour = 0; hour <= 23; hour++){
        for (let minutes = 0; minutes <= 59; minutes++){
            for (let seconds = 0; seconds <= 59; seconds++){
                console.log(`${hour} : ${minutes} : ${seconds}`);
            }
        }

    }
}

clock();