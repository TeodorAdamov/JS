function circle(input){
    let r = Number(input[0]);

    let circleArea = Math.PI * Math.pow(r,2);
    console.log(circleArea.toFixed(2));

    let circlePerimeter = Math.PI * 2 * r
    console.log(circlePerimeter.toFixed(2));

}

circle(["3"]);