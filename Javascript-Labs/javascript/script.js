var tweet = prompt("Write your tweet here :");
var maxTweet = 280;
var tweetLeft = maxTweet - tweet.length;
console.log("You have used " + tweet.length + " characters, you have " + tweetLeft + " characters left.");