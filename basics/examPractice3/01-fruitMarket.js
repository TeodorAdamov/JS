function fruit(input1, input2, input3, input4, input5) {
    let strawberryPrice = Number(input1);
    let bananaKg = Number(input2);
    let orangesKg = Number(input3);
    let raspberriesKg = Number(input4);
    let strawberryKg = Number(input5);

    let raspberryPrice = strawberryPrice * 0.5;
    let orangesPrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;

    let total = (strawberryPrice * strawberryKg) + (bananaPrice * bananaKg) + (orangesPrice * orangesKg) + (raspberryPrice * raspberriesKg);
    console.log(total.toFixed(2));
}

fruit('63.5', '3.57', '6.35', '8.15', '2.5');