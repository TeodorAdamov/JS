function login(input){
    let username = input.shift();
    let usernameReversed = username.split("").reverse().join("");
    let password = input.shift()
    let count = 0;

    while (usernameReversed !== password){
        count++;
        password = input.shift()
        if (count >= 4){
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
    }

    console.log(`User ${username} logged in.`);

}
login(['sunny','rainy','cloudy','sunny','not sunny'])
