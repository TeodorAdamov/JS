function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i < fansCount + 2; i++) {
        let sector = input[i];
        switch (sector) {
            case 'A':
                sectorA++;
                break;
            case 'B':
                sectorB++;
                break;
            case 'V':
                sectorV++;
                break;
            case 'G':
                sectorG++;
                break;
        }
        
    }
    console.log((sectorA / fansCount * 100).toFixed(2) + '%');
    console.log((sectorB / fansCount * 100).toFixed(2) + '%');
    console.log((sectorV / fansCount * 100).toFixed(2) + '%');
    console.log((sectorG / fansCount * 100).toFixed(2) + '%');
    console.log((fansCount / stadiumCapacity * 100).toFixed(2) + '%');
}

footballLeague([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B',
])