function ball(input){
    let ballsCount = Number(input[0]);
    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yellowBallsCount = 0;
    let whiteBallsCount = 0;
    let otherColorsCount = 0;
    let dividesFromBlackBalls = 0;
    let totalPoints = 0;


    for (let i = 1; i <= ballsCount; i++) {
        let curBall = input[i];

        switch (curBall){
            case 'red':
                redBallsCount++;
                totalPoints += 5;
                break;
            case 'orange':
                orangeBallsCount++;
                totalPoints += 10;    
                break;
            case 'yellow':
                yellowBallsCount++;
                totalPoints += 15;
                break;
            case 'white':
                whiteBallsCount++;
                totalPoints += 20;
                break;
            case 'black':
                dividesFromBlackBalls++;
                totalPoints = Math.floor(totalPoints / 2)
                break;
            default :
            otherColorsCount++;
            
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls: ${orangeBallsCount}`);
    console.log(`Yellow balls: ${yellowBallsCount}`);
    console.log(`White balls: ${whiteBallsCount}`);
    console.log(`Other colors picked: ${otherColorsCount}`);
    console.log(`Divides from black balls: ${dividesFromBlackBalls}`);


}

ball(['3', 'white', 'black', 'pink']);