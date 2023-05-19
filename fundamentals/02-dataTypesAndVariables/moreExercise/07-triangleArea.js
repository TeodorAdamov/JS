function triangleArea(a, b, c) {
    let s = (a + b + c) * 0.5
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area;


} 


let result = triangleArea(5,7,3)
console.log(result);
