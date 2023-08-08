function fancyBarcodes(data) {

    let count = Number(data.shift());
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
    let numPattern = /\d/g


    for (let i = 0; i < count; i++) {
        let productGroup = '00'
        let match = pattern.exec(data[i])
        if (match !== null) {
            let numMatch = match.groups.barcode.match(numPattern)

            if (numMatch !== null) {
                productGroup = numMatch.join('')
            }
        }


        if (match === null) {
            console.log('Invalid barcode');
        } else {
            console.log(`Product group: ${productGroup}`);
        }
    }
}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
