function figures(input){
    let figure = input[0];

    if (figure === "square"){
        let a = Number(input[1]);
        let squareArea = a * a;  
        console.log(squareArea.toFixed(3));
    } else if
        (figure === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let rectangleArea = a * b;    
        console.log(rectangleArea.toFixed(3));
    } else if
        (figure === "circle"){
            let r = Number(input[1]);
            let circleArea = Math.PI * Math.pow(r,2);
            console.log(circleArea.toFixed(3));
    } else if 
        (figure === "triangle" ){
            let a = Number(input[1]);
            let h = Number(input[2]);
            let rectangleArea = (a * h) / 2;
            console.log(rectangleArea.toFixed(3));
        }
}

figures(["circle", "5"]);
