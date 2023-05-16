function sleepyTomCat(input){
    let holidayDays = Number(input[0]);
    let workingDays = 365 - holidayDays;
    
    // колко минути ще си играе том с стопанина му (63 за всеки работен ден и 127 за всеки почивен ден)
    let calculatedTimeToPlay = workingDays * 63 + holidayDays * 127;


    // за една година том има 30000 мин за игра 
    let tomPlayingTimePerYear = 30000;

    //смятане на колко часа и минути му остават или не стигат за игра
    let timeLeftAfterPlaying = tomPlayingTimePerYear - calculatedTimeToPlay;
    let hours = Math.trunc(timeLeftAfterPlaying / 60);
    let minutes = timeLeftAfterPlaying % 60;
    
    if (tomPlayingTimePerYear >= calculatedTimeToPlay) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }   else {
        console.log("Tom will run away");
        console.log(`${Math.abs(hours)} hours and ${Math.abs(minutes)} minutes more for play`);
    }




}

sleepyTomCat(["113"]);