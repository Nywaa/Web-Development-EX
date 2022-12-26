//Capping user tweet
var tweet = prompt("Write your tweet here :");
var maxTweet = 140;
var tweetLeft = maxTweet - tweet.length;
console.log("You have used " + tweet.length + " characters, you have " + tweetLeft + " characters left.");

//Slicing user tweet
var finalTweet = tweet.slice(0, maxTweet);

//Output the final tweet of the user
console.log(finalTweet);