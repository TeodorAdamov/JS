function theBiscuitFactory(data) {
    let biscuitPerWokerPerDay = Number(data.shift());
    let workersCount = Number(data.shift());
    let competingFactory = Number(data.shift())
    let daysCount = 1;
    let dailyBiscuits = biscuitPerWokerPerDay * workersCount;
    let totalBiscuits = 0;

    for(let i = 1; i <= 30; i++) {
        daysCount++;
        
        if(daysCount % 3 === 0) {
            totalBiscuits += Math.floor(dailyBiscuits * 0.75)
        } else {
            totalBiscuits += Math.floor(dailyBiscuits);
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    if (totalBiscuits > competingFactory) {
        let moreCount = totalBiscuits - competingFactory;
        let percentageMore = moreCount / competingFactory * 100
        console.log(`You produce ${percentageMore.toFixed(2)} percent more biscuits.`);
    } else {
        let lessCount = competingFactory - totalBiscuits
        let percentLess = lessCount / competingFactory * 100
        console.log(`You produce ${percentLess.toFixed(2)} percent less biscuits.`);
    }

}

theBiscuitFactory([
    "65",
    "12",
    "26000"])