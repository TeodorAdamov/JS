function sort(arr) {

    arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).forEach(el => console.log(el))
}

sort([
    'alpha',
    'beta',
    'gamma'])