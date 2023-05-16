function harvest(input){
    let squareMt = Number(input[0]);
    let grapePerSquareMt = Number(input[1]);
    let wineLitresNeeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapes = squareMt * grapePerSquareMt;
    let wineProduced = 0.4 * totalGrapes / 2.5;
    
    if (wineProduced >= wineLitresNeeeded) {
        let wineLeft = wineProduced - wineLitresNeeeded;
        let winePerWorker = wineLeft / workersCount;
        console.log(`Good harvest this year! Total wine: ${wineProduced} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }   else {
        let wineNeeded = wineLitresNeeeded - wineProduced;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    }



}

harvest(["1020", "1.5", "425", "4"]);