function generateReport() {
    const tableHeadChecks = document.querySelectorAll('thead tr th')
    const rows = document.querySelectorAll('tbody tr')
    const output = document.getElementById('output')

    const outputData = [];
    let checks = 0;
    for (let i = 0; i < tableHeadChecks.length; i++) {
        const checked = tableHeadChecks[i].children[0].checked
        let text = tableHeadChecks[i].textContent.trim().toLowerCase();
        if (checked) {
            
            for (let j = 0; j < rows.length; j++) {
                const cols = document.querySelectorAll('tbody tr')[j].children
                const cellData = cols[i].textContent.trim();
                
                if (checks > 0) {
                    outputData[j][text] = cellData;
                } else {
                    let myObj = {
                        [text]: cellData,
                    }
                    outputData.push(myObj)
                }
            }
            checks++  
        }  
    }
    console.log(outputData[0])
    output.textContent = JSON.stringify(outputData)
}