// От конзолата се четат четири реда:
// Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
// Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
// Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
// Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]


function pipesInPool(input){
    let v = Number(input[0]);
    let pipe1PerHour = Number(input[1]);
    let pipe2PerHour = Number(input[2]);
    let hoursMissing = Number(input[3]);

    let pipe1Total = pipe1PerHour * hoursMissing;
    let pipe2Total = pipe2PerHour * hoursMissing;
    let pipesTotal = pipe1Total + pipe2Total;

    let percentFilled = (pipesTotal / v) * 100;
    let pipe1Percent = (pipe1Total / pipesTotal) * 100;
    let pipe2Percent = (pipe2Total / pipesTotal) * 100;

    if (v >= pipesTotal){
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
    }   else {
        let overflow = pipesTotal - v;
        console.log(`For ${hoursMissing} hours the pool overflows with ${overflow} liters.`);
    }

    


}

pipesInPool(["1000", "100", "120", "3"]);