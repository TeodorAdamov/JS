function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalClimbers = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let currentGroup = Number(input[i]);
        totalClimbers += currentGroup;

        if (currentGroup <= 5) {
            p1 += currentGroup;
        } else if (currentGroup <= 12) {
            p2 += currentGroup;
        } else if (currentGroup <= 25) {
            p3 += currentGroup;
        } else if (currentGroup <= 40) {
            p4 += currentGroup;
        } else {
            p5 += currentGroup;
        }
    }

    console.log(((p1 / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((p2 / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((p3 / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((p4 / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((p5 / totalClimbers) * 100).toFixed(2) + '%');
}

trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])