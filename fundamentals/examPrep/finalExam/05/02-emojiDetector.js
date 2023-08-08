function emoji(data) {

    let pattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    let numPattern = /\d/g;
    let coolThreshold = data[0].match(numPattern).reduce((sum, num) => sum * Number(num), 1);
    let emojis = data[0].match(pattern);
    let emojisCount = emojis.length;
    let coolEmojis = [];

    for (let emoji of emojis) {
        let clearEmoji = emoji.replace(/(::|\*\*)/g,'')
        let coolness = clearEmoji.split('').reduce((sum, char) => sum + char.charCodeAt(), 0)
        
        if(coolness >= coolThreshold){
            coolEmojis.push(emoji)
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
    console.log(`${coolEmojis.join('\n')}`);
}

emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])