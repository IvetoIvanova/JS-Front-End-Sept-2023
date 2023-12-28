function processComments(input) {
    const users = {};
    const articles = {};

    for (const line of input) {
        if (line.startsWith("user")) {
            const username = line.split(" ")[1];
            users[username] = [];
        } else if (line.startsWith("article")) {
            const articleName = line.split(" ")[1];
            articles[articleName] = [];
        } else if (line.includes("posts on")) {
            const [username, articleInfo] = line.split(" posts on ");

            const articleName = articleInfo.split(":")[0].trim();

            const commentInfo = articleInfo.split(": ")[1];
            const [commentTitle, commentContent] = commentInfo.split(", ").map(e => e.trim());

            if (users[username] && articles[articleName]) {
                const comment = { username, commentTitle, commentContent };
                articles[articleName].push(comment);
                users[username].push(comment);
            }
        }
    }

    const sortedArticles = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);

    for (const [articleName, comments] of sortedArticles) {
        const sortedComments = comments.sort((a, b) => a.username.localeCompare(b.username));
        console.log(`Comments on ${articleName}`);

        sortedComments.forEach(comment => {
            console.log(`--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`);
        });
    }
}

processComments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);

processComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam', 'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like']);