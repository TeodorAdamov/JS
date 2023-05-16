function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontAndBackWallArea = (x * x) * 2;
    let sideWallsArea = (x * y) * 2
    let allWallsArea = sideWallsArea + frontAndBackWallArea
    let doorArea = 1.2 * 2;
    let windowsArea = (1.5 * 1.5) * 2;

    let totalAreaThatNeedsPainting = allWallsArea - (doorArea + windowsArea);
    let totalGreenPaintNeeded = totalAreaThatNeedsPainting / 3.4;
    console.log(totalGreenPaintNeeded.toFixed(2));

    let roofArea = (x * y) * 2;
    let roofTriangleArea = 2 * (x * h) / 2;
    let totalRoofArea = roofArea + roofTriangleArea;
    let totalRedPaintNeeded = totalRoofArea / 4.3;


    console.log(totalRedPaintNeeded.toFixed(2));
}   

housePainting(["6", "10", "5.2"]);