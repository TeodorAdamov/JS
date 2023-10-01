function solution(command) {

    //check command and do something
    if (command === 'upvote') {
        this.upvotes += 1;
    } else if (command === 'downvote') {
        this.downvotes += 1;
    } else if (command === 'score') {
        const totalVotes = this.upvotes + this.downvotes;
        let upvotesReturn = this.upvotes;
        let downvotesReturn = this.downvotes;
        const tally = this.upvotes - this.downvotes;

        if (totalVotes > 50) {
            let greaterNumber = Math.max(this.upvotes, this.downvotes)
            upvotesReturn = this.upvotes + Math.ceil(greaterNumber * 0.25);
            downvotesReturn = this.downvotes + Math.ceil(greaterNumber * 0.25);
        }


        let rating = ''
        const upvotesPercent = this.upvotes / totalVotes * 100;
        const downvotesPercent = this.downvotes / totalVotes * 100;

        if (totalVotes < 10) {
            rating = 'new';
        } else if (upvotesPercent > 66 && totalVotes >= 10) {
            rating = 'hot';
        } else if (upvotesPercent <= 66 && downvotesPercent <= 66 && tally >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (tally < 0 && totalVotes >= 10) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        return [upvotesReturn, downvotesReturn, tally, rating]
    }
}






let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

