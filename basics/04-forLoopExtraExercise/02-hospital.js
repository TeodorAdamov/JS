function hospital(input) {  
    let daysCount = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= daysCount; i++){
        if (i % 3 === 0){
            if (untreatedPatients > treatedPatients){
                doctors += 1;
            }
         }
        let patientCount = Number(input[i]);
        if (doctors >= patientCount){
            treatedPatients += patientCount;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patientCount - doctors;
        }

        
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

    
}

hospital(['4', '7', '27', '9', '1']);