function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            const result = [`Post: ${this.title}`, `Content: ${this.content}`]
            return result.join('\n')
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            const result = [super.toString(), `Rating: ${this.likes - this.dislikes}`]

            if (this.comments.length > 0) {
                result.push('Comments:')
                this.comments.forEach(com => result.push(` * ${com}`))
            }
            return result.join('\n')
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++
            return this;
        }

        toString() {
            const result = [super.toString(), `Views: ${this.views}`];
            return result.join('\n')
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}



const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
let blog = new classes.BlogPost('blogpost', 'blogcontent', 10)
blog.view().view();
blog.view().view();
console.log(blog.toString());
