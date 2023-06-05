function bunny(){
    function bombBOOM(game, damage, position){
        const min = 0
        const max = game.body[0].length - 1
        if(game.body[position[0]][position[1]] != 0){
            game.damage += Number(game.body[position[0]][position[1]])
            game.kills ++
            for(let i = -1; i < 2; i++){
                for(let j = -1; j<2; j++){
                    if((position[0] + i >= min && position[0] + i <= max) && (position[1] + j  >= min && position[1] + j <= max)){
                        if(game.body[position[0] + i][position[1] + j] != 0){game.body[position[0] + i][position[1] + j] -= damage}
                        if(game.body[position[0] + i][position[1] + j] < 0){game.body[position[0] + i][position[1] + j] = 0}
                    }
                }
            }
        }
        return game
    }

    function bunnySlayer(game){
        const min = 0
        const max = game.body[0].length
        for(let i = min; i < max; i ++){
            for(let j = min; j < max; j++){
                if(game.body[i][j] > 0){
                    game.damage += Number(game.body[i][j])
                    game.kills ++
                }
            }
        }
        return game
    }
    
    game = {
        bomb : 0,
        body : [],
        damage : 0,
        kills : 0
    }
    game.bomb = arguments[0].pop().split(" ")
    for(let argument of arguments[0]){
        game.body.splice(0,0,argument.split(" "))
    }
    game.body.reverse()

    while(game.bomb.length > 0){
        
        position = game.bomb.splice(0,1)
        position = position[0].split(",").map(Number)
        if(game.body[position[0]] == undefined){continue}
        if(game.body[position[0]][position[1]] == undefined){continue}
        damage = Number(game.body[position[0]][position[1]])
        
        game = bombBOOM(game,damage,position)
        
    }
    
    game = bunnySlayer(game)
    
    console.log(game.damage)
    console.log(game.kills)
}

bunny([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'])