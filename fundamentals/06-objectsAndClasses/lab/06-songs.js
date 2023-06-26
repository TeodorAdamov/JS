function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songCount = input.shift();
    let typeToPrint = input.pop();
    let songs = [];

    for (let i = 0; i < songCount; i++) {
        let currentSongInfo = input.shift().split('_');
        let song = new Song(currentSongInfo[0], currentSongInfo[1], (currentSongInfo[2]))
        songs.push(song)
    }
    if (typeToPrint === 'all') {
        songs.forEach((el) => console.log(el.name))
    } else {
        let filteredSongs = songs.filter((el) => el.type === typeToPrint);
        filteredSongs.forEach((el) => console.log(el.name))
    }



}

songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)