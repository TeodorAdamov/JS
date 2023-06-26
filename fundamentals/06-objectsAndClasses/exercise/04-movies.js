function movies(input) {

    let movies = [];
   

    for (let i = 0; i < input.length; i++) {
        let currentMovie = input[i].split(' ');

        if (currentMovie.includes('addMovie')) {
            let obj = {};
            currentMovie.shift();
            obj.name = currentMovie.join(' ');
            movies.push(obj)

        } else if (currentMovie.includes('directedBy')) {

            let indexToSplice = currentMovie.indexOf('directedBy');
            currentMovie.splice(indexToSplice, 1)
            let movieToCheck = currentMovie.slice(0, indexToSplice).join(' ');
            let findMovie = movies.find(x => x.name === movieToCheck);
            if(findMovie) {
                findMovie.director = currentMovie.slice(indexToSplice).join(' ')
            }      
        } else {
            let indexToSplice = currentMovie.indexOf('onDate');
            currentMovie.splice(indexToSplice, 1)
            let movieToCheck = currentMovie.slice(0, indexToSplice).join(' ');
            let findMovie = movies.find(x => x.name === movieToCheck);
            if(findMovie) {
                findMovie.date = currentMovie.slice(indexToSplice).join(' ');
            }      
        }
    }

    for(let movie of movies) {
        if(Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie));
        }
    }
    
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])