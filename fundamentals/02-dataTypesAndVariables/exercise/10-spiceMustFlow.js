function spice(yield) {
    let spiceProduced = 0;
    let days = 0
    while (yield >= 100) {
        spiceProduced += yield
        spiceProduced -= 26;        //26 for workers everyday
        yield -= 10;
        days++;
    }
    spiceProduced -= 26;        //26 for workers everyday
    if (spiceProduced < 0) {
        spiceProduced = 0;
    }
    console.log(days);
    console.log(spiceProduced);
    
}

spice(10)