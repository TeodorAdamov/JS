function trekkingMania(input){
    let groupsCount = Number(input[0]);
    let musalaCount = 0;
    let monblanCount = 0;
    let kiliCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    let total = 0;
    

    for (let i = 1; i <= groupsCount; i++){
        let currentGroup = Number(input[i]);
        total += currentGroup
        if (currentGroup <= 5){
            musalaCount += currentGroup;
        } else if (currentGroup <= 12){
            monblanCount += currentGroup;
        } else if (currentGroup <= 25){
            kiliCount += currentGroup;
        } else if (currentGroup <= 40){
            k2Count += currentGroup;
        } else if (currentGroup >= 41){
            everestCount += currentGroup;
        }
    }

    let musalaPercent = musalaCount / total * 100
    let monblanPercent = monblanCount / total * 100
    let kiliPercent = kiliCount / total * 100
    let k2Percent = k2Count / total * 100
    let everestPercent = everestCount / total * 100




    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);


}

trekkingMania([
'10',
'10',
'5',
'1',
'100',
'12',
'26',
'17',
'37',
'40',
'78',
])